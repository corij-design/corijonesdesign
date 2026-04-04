"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { NavOverlay } from "./nav-overlay";
import { NavTrigger } from "./nav-trigger";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLDivElement>(null);

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key and return focus to trigger
  const handleClose = useCallback(() => {
    setIsOpen(false);
    // Return focus to the trigger button area
    requestAnimationFrame(() => {
      const trigger = triggerRef.current?.querySelector("button");
      trigger?.focus();
    });
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  return (
    <>
      <div
        ref={triggerRef}
        className="fixed top-5 right-6 z-[101] flex items-center gap-4"
      >
        <NavTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <ThemeToggle />
      </div>
      <NavOverlay isOpen={isOpen} onClose={handleClose} />
      {children}
    </>
  );
}
