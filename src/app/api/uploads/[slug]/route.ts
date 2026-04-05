import { promises as fs } from "fs";
import { getUpload, getUploadFilePath, deleteUpload } from "@/lib/uploads";

// GET /api/uploads/[slug] — serve the file
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const record = await getUpload(slug);

  if (!record) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const filePath = await getUploadFilePath(slug);
  if (!filePath) {
    return Response.json({ error: "File not found" }, { status: 404 });
  }

  try {
    const buffer = await fs.readFile(filePath);
    return new Response(buffer, {
      headers: {
        "Content-Type": record.mimeType,
        "Content-Disposition": `inline; filename="${record.originalName}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return Response.json({ error: "File not found on disk" }, { status: 404 });
  }
}

// DELETE /api/uploads/[slug] — delete an upload
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const deleted = await deleteUpload(slug);

  if (!deleted) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json({ success: true });
}
