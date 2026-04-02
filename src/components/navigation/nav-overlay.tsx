"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  {
    label: "Work",
    href: "/work",
    number: "01",
    description: "Case studies in organizational coherence",
    position: "lg:col-start-2 lg:col-span-4 lg:row-start-1",
  },
  {
    label: "Thinking",
    href: "/thinking",
    number: "02",
    description: "Essays on design leadership and systems",
    position: "lg:col-start-7 lg:col-span-4 lg:row-start-1",
  },
  {
    label: "Workshop",
    href: "/workshop",
    number: "03",
    description: "Prototypes, tools, and vibe-coded experiments",
    position: "lg:col-start-3 lg:col-span-5 lg:row-start-2",
  },
  {
    label: "Diagnostic",
    href: "/diagnostic",
    number: "04",
    description: "Measure your organization\u2019s coherence",
    position: "lg:col-start-8 lg:col-span-4 lg:row-start-2",
  },
  {
    label: "About",
    href: "/about",
    number: "05",
    description: "Philosophy, background, and how I think",
    position: "lg:col-start-2 lg:col-span-4 lg:row-start-3",
  },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 + i * 0.08,
      ease: easeOut,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      delay: i * 0.03,
    },
  }),
};

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus first link when overlay opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to let animation start
      const timer = setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const focusStyles =
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 outline-none";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg-primary flex items-center"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          {/* Subtle grid lines in the background */}
          <div
            className="absolute inset-0"
            style={{
              paddingLeft: "var(--grid-margin)",
              paddingRight: "var(--grid-margin)",
            }}
          >
            <div
              className="h-full max-w-[1536px] mx-auto"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(var(--grid-columns), 1fr)",
                gap: "var(--grid-gutter)",
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full border-x border-text-primary/[0.03] hidden lg:block [&:nth-child(-n+4)]:block md:[&:nth-child(-n+8)]:block"
                />
              ))}
            </div>
          </div>

          {/* Navigation items */}
          <nav className="relative z-10 w-full max-w-[1536px] mx-auto" style={{ padding: "0 var(--grid-margin)" }}>
            {/* Mobile: stacked list */}
            <div className="lg:hidden space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={`group block ${focusStyles}`}
                  >
                    <span className="text-caption uppercase text-text-tertiary font-mono block mb-1 tracking-[0.08em]">
                      {item.number}
                    </span>
                    <span
                      className={`text-display-md font-display font-bold block transition-colors leading-[0.95] tracking-[-0.025em] ${
                        pathname === item.href
                          ? "text-accent"
                          : "group-hover:text-accent"
                      }`}
                      style={{ transitionDuration: "var(--duration-base)" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-body-sm text-text-secondary block mt-1 leading-[1.5]">
                      {item.description}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop: spatial grid layout */}
            <div
              className="hidden lg:grid gap-y-16"
              style={{
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "var(--grid-gutter)",
                rowGap: "4rem",
                gridAutoRows: "minmax(140px, auto)",
              }}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  className={item.position}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={`group block ${focusStyles}`}
                  >
                    <span className="text-caption uppercase text-text-tertiary font-mono block mb-2 tracking-[0.08em]">
                      {item.number}
                    </span>
                    <span
                      className={`text-display-md font-display font-bold block transition-colors leading-[0.95] tracking-[-0.025em] ${
                        pathname === item.href
                          ? "text-accent"
                          : "group-hover:text-accent"
                      }`}
                      style={{ transitionDuration: "var(--duration-base)" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-body-md text-text-secondary block mt-2 max-w-[30ch] leading-[1.6]">
                      {item.description}
                    </span>

                    {/* Hover: accent underline wipes in */}
                    <span
                      className="block mt-3 h-px w-0 bg-accent group-hover:w-full transition-all"
                      style={{
                        transitionDuration: "var(--duration-slow)",
                        transitionTimingFunction: "var(--ease-out)",
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Home link — bottom left */}
            <motion.div
              className="mt-16 lg:mt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/"
                onClick={onClose}
                className={`text-caption uppercase text-text-tertiary font-mono hover:text-accent transition-colors tracking-[0.08em] ${focusStyles}`}
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                ← Home
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
