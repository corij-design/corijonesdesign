"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UploadRecord {
  slug: string;
  originalName: string;
  fileName: string;
  mimeType: string;
  size: number;
  type: "image" | "html";
  createdAt: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AdminPage() {
  const [uploads, setUploads] = useState<UploadRecord[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchUploads = useCallback(async () => {
    try {
      const res = await fetch("/api/uploads");
      if (res.ok) {
        const data = await res.json();
        setUploads(data);
      }
    } catch {
      console.error("Failed to fetch uploads");
    }
  }, []);

  useEffect(() => {
    fetchUploads();
  }, [fetchUploads]);

  const getShareUrl = (slug: string) => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/s/${slug}`;
    }
    return `/s/${slug}`;
  };

  const handleUpload = async (files: FileList | File[]) => {
    setError(null);
    setIsUploading(true);

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/uploads", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const err = await res.json();
          setError(err.error || "Upload failed");
        }
      } catch {
        setError("Upload failed — network error");
      }
    }

    setIsUploading(false);
    fetchUploads();
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this upload? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/uploads/${slug}`, { method: "DELETE" });
      if (res.ok) {
        setUploads((prev) => prev.filter((u) => u.slug !== slug));
      }
    } catch {
      setError("Delete failed");
    }
  };

  const handleCopy = async (slug: string) => {
    const url = getShareUrl(slug);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(slug);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(slug);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="font-mono text-xs uppercase tracking-[0.08em] mb-4"
            style={{ color: "var(--text-tertiary)" }}
          >
            Admin / Showoff
          </p>
          <h1
            className="font-display text-4xl font-bold tracking-tight mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Share files
          </h1>
          <p
            className="text-base max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Upload images and HTML files to generate shareable links. Anyone with
            the link can view them.
          </p>
        </div>

        {/* Upload zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="relative mb-12 cursor-pointer group"
        >
          <div
            className="border border-dashed rounded-sm p-12 text-center transition-colors"
            style={{
              borderColor: isDragging
                ? "var(--accent)"
                : "var(--border-default)",
              backgroundColor: isDragging
                ? "rgba(232, 77, 26, 0.05)"
                : "var(--bg-secondary)",
            }}
          >
            {/* Upload icon */}
            <div className="mb-4 flex justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  color: isDragging
                    ? "var(--accent)"
                    : "var(--text-tertiary)",
                }}
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>

            <p
              className="font-display text-sm font-medium mb-1"
              style={{
                color: isDragging
                  ? "var(--accent)"
                  : "var(--text-primary)",
              }}
            >
              {isUploading
                ? "Uploading..."
                : isDragging
                ? "Drop files here"
                : "Drop files here or click to browse"}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              PNG, JPG, GIF, SVG, WebP, HTML — up to 20MB
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".png,.jpg,.jpeg,.gif,.svg,.webp,.html,.htm"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) {
                handleUpload(e.target.files);
                e.target.value = "";
              }
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <div
            className="mb-8 p-4 rounded-sm border text-sm font-mono"
            style={{
              borderColor: "var(--accent)",
              backgroundColor: "rgba(232, 77, 26, 0.08)",
              color: "var(--accent)",
            }}
          >
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-4 underline cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Uploads list */}
        {uploads.length > 0 && (
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.08em] mb-6"
              style={{ color: "var(--text-tertiary)" }}
            >
              Uploads ({uploads.length})
            </p>

            <div className="space-y-px">
              {uploads.map((upload) => (
                <div
                  key={upload.slug}
                  className="flex items-center gap-4 p-4 group/item transition-colors"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  {/* Thumbnail */}
                  <div
                    className="w-12 h-12 rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "var(--bg-elevated)" }}
                  >
                    {upload.type === "image" ? (
                      <img
                        src={`/api/uploads/${upload.slug}`}
                        alt={upload.originalName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-display text-sm font-medium truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {upload.originalName}
                    </p>
                    <p
                      className="font-mono text-xs mt-0.5"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {formatBytes(upload.size)} · {formatDate(upload.createdAt)}
                    </p>
                  </div>

                  {/* Slug / URL */}
                  <div className="hidden sm:block">
                    <code
                      className="font-mono text-xs px-2 py-1 rounded-sm"
                      style={{
                        backgroundColor: "var(--bg-elevated)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      /s/{upload.slug}
                    </code>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {/* Open */}
                    <a
                      href={`/s/${upload.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm transition-colors hover:opacity-80"
                      style={{ color: "var(--text-tertiary)" }}
                      title="Open"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>

                    {/* Copy link */}
                    <button
                      onClick={() => handleCopy(upload.slug)}
                      className="p-2 rounded-sm transition-colors hover:opacity-80 cursor-pointer"
                      style={{
                        color:
                          copied === upload.slug
                            ? "#B2EF0B"
                            : "var(--text-tertiary)",
                      }}
                      title="Copy link"
                    >
                      {copied === upload.slug ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                      )}
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(upload.slug)}
                      className="p-2 rounded-sm transition-colors hover:opacity-80 cursor-pointer"
                      style={{ color: "var(--text-tertiary)" }}
                      title="Delete"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {uploads.length === 0 && !isUploading && (
          <div
            className="text-center py-16 font-mono text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            No uploads yet. Drop a file above to get started.
          </div>
        )}
      </div>
    </main>
  );
}
