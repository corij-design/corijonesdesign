"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Cori Jones" },
  { id: "work", label: "01 — Work" },
  { id: "thinking", label: "02 — Thinking" },
  { id: "contact", label: "06 — Connect" },
];

export function SectionMarker() {
  const [active, setActive] = useState(sections[0].label);
  const [activeId, setActiveId] = useState(sections[0].id);
  const pathname = usePathname();

  useEffect(() => {
    // Only observe sections on the home page
    if (pathname !== "/") return;

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(label);
            setActiveId(id);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const handleClick = useCallback(() => {
    if (pathname !== "/") return;
    const el = document.getElementById(activeId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeId, pathname]);

  // Hide on non-home pages (the nav overlay handles labeling there)
  if (pathname !== "/") return null;

  return (
    <button
      onClick={handleClick}
      className="fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:flex items-center z-50 cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      aria-label={`Scroll to ${active}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={active}
          className="font-mono uppercase whitespace-nowrap text-text-tertiary hover:text-accent transition-colors"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            transitionDuration: "var(--duration-base)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
        >
          {active}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
