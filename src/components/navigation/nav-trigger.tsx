"use client";

import { motion } from "framer-motion";

interface NavTriggerProps {
  isOpen: boolean;
  onClick: () => void;
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function NavTrigger({ isOpen, onClick }: NavTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 outline-none"
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={isOpen}
    >
      <span
        className="uppercase text-text-tertiary font-mono tracking-[0.08em] group-hover:text-text-primary transition-colors"
        style={{ transitionDuration: "var(--duration-base)", fontSize: "12px", letterSpacing: "0.96px" }}
      >
        Menu
      </span>

      {/* Three-line hamburger that morphs into X */}
      <div className="relative w-6 h-4 flex flex-col items-end justify-center gap-[4px]">
        {/* Line 1 — full width */}
        <motion.span
          className="block h-px bg-text-primary origin-center"
          animate={
            isOpen
              ? { rotate: 45, y: 6, width: "100%" }
              : { rotate: 0, y: 0, width: "100%" }
          }
          transition={{ duration: 0.3, ease: easeOut }}
        />
        {/* Line 2 — ~79% width */}
        <motion.span
          className="block h-px bg-text-primary origin-center"
          animate={
            isOpen
              ? { opacity: 0, width: "79%" }
              : { opacity: 1, width: "79%" }
          }
          transition={{ duration: 0.2, ease: easeOut }}
        />
        {/* Line 3 — ~66% width, aligned right */}
        <motion.span
          className="block h-px bg-text-primary origin-center"
          animate={
            isOpen
              ? { rotate: -45, y: -6, width: "100%" }
              : { rotate: 0, y: 0, width: "66%" }
          }
          transition={{ duration: 0.3, ease: easeOut }}
        />
      </div>
    </button>
  );
}
