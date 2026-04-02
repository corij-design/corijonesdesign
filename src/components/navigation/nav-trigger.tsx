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
      className="fixed top-6 right-20 z-[101] flex items-center gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 outline-none"
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={isOpen}
    >
      <span
        className="text-caption uppercase text-text-tertiary font-mono group-hover:text-text-primary transition-colors tracking-[0.08em]"
        style={{ transitionDuration: "var(--duration-base)" }}
      >
        Menu
      </span>

      {/* Two-line icon that morphs into X */}
      <div className="relative w-6 h-4 flex flex-col justify-between">
        <motion.span
          className="block w-full h-px bg-text-primary origin-center"
          animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
        />
        <motion.span
          className="block h-px bg-text-primary ml-auto origin-center"
          animate={
            isOpen
              ? { rotate: -45, y: -7.5, width: "100%" }
              : { rotate: 0, y: 0, width: "66%" }
          }
          transition={{ duration: 0.3, ease: easeOut }}
        />
      </div>
    </button>
  );
}
