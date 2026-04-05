import { getUpload } from "@/lib/uploads";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const record = await getUpload(slug);

  if (!record) {
    return { title: "Not Found" };
  }

  return {
    title: `${record.originalName} — Cori Jones`,
    description: `Shared by Cori Jones`,
    openGraph: {
      title: record.originalName,
      ...(record.type === "image" && {
        images: [`/api/uploads/${slug}`],
      }),
    },
  };
}

export default async function SharedPage({ params }: Props) {
  const { slug } = await params;
  const record = await getUpload(slug);

  if (!record) {
    notFound();
  }

  const fileUrl = `/api/uploads/${slug}`;

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Minimal header */}
      <header
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: "var(--border-default)" }}
      >
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="font-display text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            corijonesdesign.com
          </a>
          <span
            className="font-mono text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            /
          </span>
          <span
            className="font-mono text-xs truncate max-w-[200px] sm:max-w-none"
            style={{ color: "var(--text-tertiary)" }}
          >
            {record.originalName}
          </span>
        </div>

        <a
          href={fileUrl}
          download={record.originalName}
          className="font-mono text-xs uppercase tracking-[0.08em] px-3 py-1.5 rounded-sm border transition-colors hover:opacity-80"
          style={{
            borderColor: "var(--border-default)",
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          Download
        </a>
      </header>

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center p-6">
        {record.type === "image" ? (
          <div className="max-w-5xl w-full flex items-center justify-center">
            <img
              src={fileUrl}
              alt={record.originalName}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              style={{
                boxShadow: "0 0 0 1px rgba(240, 237, 232, 0.06)",
              }}
            />
          </div>
        ) : (
          <iframe
            src={fileUrl}
            title={record.originalName}
            className="w-full h-[85vh] rounded-sm border"
            style={{
              borderColor: "var(--border-default)",
              backgroundColor: "#ffffff",
            }}
            sandbox="allow-scripts allow-same-origin"
          />
        )}
      </div>

      {/* Footer info */}
      <footer
        className="px-6 py-3 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border-default)" }}
      >
        <p
          className="font-mono text-xs"
          style={{ color: "var(--text-tertiary)" }}
        >
          Shared by Cori Jones
        </p>
        <p
          className="font-mono text-xs"
          style={{ color: "var(--text-tertiary)" }}
        >
          {record.type === "image" ? "Image" : "HTML"} ·{" "}
          {(record.size / 1024).toFixed(0)} KB
        </p>
      </footer>
    </main>
  );
}
