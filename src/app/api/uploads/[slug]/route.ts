import { getUpload, deleteUpload } from "@/lib/uploads";

// GET /api/uploads/[slug] — redirect to the blob URL
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const record = await getUpload(slug);

  if (!record) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  // Redirect to the Vercel Blob public URL
  return Response.redirect(record.url, 302);
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
