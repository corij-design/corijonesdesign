import { put, del, list } from "@vercel/blob";
import crypto from "crypto";

export interface UploadRecord {
  slug: string;
  originalName: string;
  mimeType: string;
  size: number;
  type: "image" | "html";
  url: string;
  createdAt: string;
}

function generateSlug(): string {
  const bytes = crypto.randomBytes(6);
  return bytes
    .toString("base64url")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 8)
    .toLowerCase();
}

function extFromName(name: string): string {
  const parts = name.split(".");
  return parts.length > 1 ? `.${parts.pop()!.toLowerCase()}` : "";
}

/**
 * Upload a file to Vercel Blob.
 * Files are stored under the "showoff/" prefix with the slug as the pathname.
 * Original name, mime type, and upload type are encoded in a companion .meta.json blob.
 */
export async function saveUpload(file: File): Promise<UploadRecord> {
  const slug = generateSlug();
  const ext = extFromName(file.name);
  const isHtml =
    file.type === "text/html" ||
    ext === ".html" ||
    ext === ".htm";

  const pathname = `showoff/${slug}${ext}`;

  // Upload the file
  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: false,
  });

  // Store metadata as a companion blob
  const meta: UploadRecord = {
    slug,
    originalName: file.name,
    mimeType: file.type || (isHtml ? "text/html" : "application/octet-stream"),
    size: file.size,
    type: isHtml ? "html" : "image",
    url: blob.url,
    createdAt: new Date().toISOString(),
  };

  await put(`showoff/${slug}.meta.json`, JSON.stringify(meta), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });

  return meta;
}

/**
 * List all uploads by reading .meta.json blobs.
 */
export async function listUploads(): Promise<UploadRecord[]> {
  const records: UploadRecord[] = [];
  let cursor: string | undefined;

  do {
    const result = await list({
      prefix: "showoff/",
      cursor,
    });

    for (const blob of result.blobs) {
      if (blob.pathname.endsWith(".meta.json")) {
        try {
          const res = await fetch(blob.url);
          if (res.ok) {
            const meta = (await res.json()) as UploadRecord;
            records.push(meta);
          }
        } catch {
          // Skip corrupted metadata
        }
      }
    }

    cursor = result.hasMore ? result.cursor : undefined;
  } while (cursor);

  // Sort newest first
  records.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return records;
}

/**
 * Get a single upload by slug.
 */
export async function getUpload(slug: string): Promise<UploadRecord | null> {
  try {
    // Find the meta blob
    const result = await list({ prefix: `showoff/${slug}.meta.json` });
    const metaBlob = result.blobs.find((b) =>
      b.pathname === `showoff/${slug}.meta.json`
    );

    if (!metaBlob) return null;

    const res = await fetch(metaBlob.url);
    if (!res.ok) return null;

    return (await res.json()) as UploadRecord;
  } catch {
    return null;
  }
}

/**
 * Delete an upload and its metadata blob.
 */
export async function deleteUpload(slug: string): Promise<boolean> {
  const record = await getUpload(slug);
  if (!record) return false;

  try {
    // Delete the file blob and meta blob
    await del(record.url);

    // Find and delete meta
    const result = await list({ prefix: `showoff/${slug}.meta.json` });
    const metaBlob = result.blobs.find(
      (b) => b.pathname === `showoff/${slug}.meta.json`
    );
    if (metaBlob) {
      await del(metaBlob.url);
    }

    return true;
  } catch {
    return false;
  }
}
