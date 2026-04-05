import { getUpload } from "@/lib/uploads";

/**
 * Serves uploaded files directly — HTML renders as a page,
 * images display natively in the browser.
 * URLs look like: /f/abc123.html or /f/abc123.png
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug: rawSlug } = await params;

  // Strip file extension from slug to look up the record
  // e.g. "abc123.html" → "abc123"
  const slug = rawSlug.replace(/\.[^.]+$/, "");

  const record = await getUpload(slug);

  if (!record) {
    return new Response("Not found", { status: 404 });
  }

  // Fetch the file from the blob URL and serve it directly
  try {
    const blobRes = await fetch(record.url);

    if (!blobRes.ok) {
      return new Response("File not found", { status: 404 });
    }

    const body = blobRes.body;

    return new Response(body, {
      headers: {
        "Content-Type": record.mimeType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Failed to fetch file", { status: 500 });
  }
}
