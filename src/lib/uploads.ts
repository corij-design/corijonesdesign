import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

// Storage paths — works locally; for Vercel production, swap to Vercel Blob
const UPLOADS_DIR = path.join(process.cwd(), "uploads");
const METADATA_FILE = path.join(UPLOADS_DIR, "metadata.json");

export interface UploadRecord {
  slug: string;
  originalName: string;
  fileName: string;
  mimeType: string;
  size: number;
  type: "image" | "html";
  createdAt: string;
}

function generateSlug(): string {
  // 8-char base62 slug
  const bytes = crypto.randomBytes(6);
  return bytes
    .toString("base64url")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 8)
    .toLowerCase();
}

async function ensureDir() {
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
}

async function readMetadata(): Promise<UploadRecord[]> {
  try {
    const data = await fs.readFile(METADATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeMetadata(records: UploadRecord[]) {
  await fs.writeFile(METADATA_FILE, JSON.stringify(records, null, 2));
}

export async function listUploads(): Promise<UploadRecord[]> {
  return readMetadata();
}

export async function getUpload(slug: string): Promise<UploadRecord | null> {
  const records = await readMetadata();
  return records.find((r) => r.slug === slug) ?? null;
}

export async function saveUpload(
  file: File
): Promise<UploadRecord> {
  await ensureDir();

  const slug = generateSlug();
  const ext = path.extname(file.name);
  const fileName = `${slug}${ext}`;
  const filePath = path.join(UPLOADS_DIR, fileName);

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, buffer);

  const isHtml =
    file.type === "text/html" || ext.toLowerCase() === ".html" || ext.toLowerCase() === ".htm";

  const record: UploadRecord = {
    slug,
    originalName: file.name,
    fileName,
    mimeType: file.type || (isHtml ? "text/html" : "application/octet-stream"),
    size: file.size,
    type: isHtml ? "html" : "image",
    createdAt: new Date().toISOString(),
  };

  const records = await readMetadata();
  records.unshift(record);
  await writeMetadata(records);

  return record;
}

export async function deleteUpload(slug: string): Promise<boolean> {
  const records = await readMetadata();
  const record = records.find((r) => r.slug === slug);
  if (!record) return false;

  // Delete file
  const filePath = path.join(UPLOADS_DIR, record.fileName);
  try {
    await fs.unlink(filePath);
  } catch {
    // File may already be gone
  }

  // Remove from metadata
  const updated = records.filter((r) => r.slug !== slug);
  await writeMetadata(updated);

  return true;
}

export async function getUploadFilePath(slug: string): Promise<string | null> {
  const record = await getUpload(slug);
  if (!record) return null;
  return path.join(UPLOADS_DIR, record.fileName);
}
