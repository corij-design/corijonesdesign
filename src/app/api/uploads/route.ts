import { NextRequest } from "next/server";
import { listUploads, saveUpload } from "@/lib/uploads";

// GET /api/uploads — list all uploads
export async function GET() {
  const uploads = await listUploads();
  return Response.json(uploads);
}

// POST /api/uploads — upload a file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    const allowedExts = ["png", "jpg", "jpeg", "gif", "svg", "webp", "html", "htm"];
    if (!allowedExts.includes(ext)) {
      return Response.json(
        { error: `File type .${ext} not allowed. Accepted: ${allowedExts.join(", ")}` },
        { status: 400 }
      );
    }

    // 20MB limit
    if (file.size > 20 * 1024 * 1024) {
      return Response.json({ error: "File too large (max 20MB)" }, { status: 400 });
    }

    const record = await saveUpload(file);
    return Response.json(record, { status: 201 });
  } catch (err) {
    console.error("Upload error:", err);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}
