"use client";

import { TypeBleed } from "@/components/typography/type-bleed";

interface SectionBreakProps {
  /** The mega word that scrolls across */
  word: string;
  /** Next section number */
  nextSection?: string;
  /** Next section label */
  nextLabel?: string;
}

export function SectionBreak({ word, nextSection, nextLabel }: SectionBreakProps) {
  return (
    <div className="py-24 md:py-40 relative">
      <TypeBleed size={20} opacity={0.06} scrollShift={120}>
        {word}
      </TypeBleed>

      {nextSection && nextLabel && (
        <div
          className="max-w-[1536px] mx-auto mt-16"
          style={{ padding: "0 var(--grid-margin)" }}
        >
          <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
            {nextSection} — {nextLabel}
          </p>
          <div className="mt-4 h-px bg-border-default w-full" />
        </div>
      )}
    </div>
  );
}
