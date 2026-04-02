"use client";

import { useState } from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export function Grid({ children, className = "" }: GridProps) {
  return (
    <div
      className={`mx-auto max-w-[1536px] ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(var(--grid-columns), 1fr)`,
        gap: "var(--grid-gutter)",
        paddingLeft: "var(--grid-margin)",
        paddingRight: "var(--grid-margin)",
      }}
    >
      {children}
    </div>
  );
}

// Dev-only: visible grid overlay
export function GridOverlay() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-4 right-4 z-[9999] cursor-pointer px-3 py-1.5 uppercase font-mono text-[0.75rem] tracking-[0.08em] bg-bg-elevated text-text-secondary border border-border-default rounded hover:text-accent transition-colors"
      >
        Grid
      </button>

      {/* Overlay */}
      {visible && (
        <div
          className="fixed inset-0 z-[9998] pointer-events-none"
          style={{
            paddingLeft: "var(--grid-margin)",
            paddingRight: "var(--grid-margin)",
          }}
        >
          <div
            className="h-full max-w-[1536px] mx-auto"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(var(--grid-columns), 1fr)`,
              gap: "var(--grid-gutter)",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full"
                style={{
                  backgroundColor: "rgba(232, 77, 26, 0.04)",
                  borderLeft: "1px solid rgba(232, 77, 26, 0.08)",
                  borderRight: "1px solid rgba(232, 77, 26, 0.08)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
