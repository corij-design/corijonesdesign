"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TypeBleedProps {
  children: string;
  /** Opacity of the text: 0.05 - 1 */
  opacity?: number;
  /** Size in vw units */
  size?: number;
  /** Shift on scroll — pixels to translate horizontally as user scrolls */
  scrollShift?: number;
  className?: string;
}

export function TypeBleed({
  children,
  opacity = 0.08,
  size = 18,
  scrollShift = 100,
  className = "",
}: TypeBleedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollShift]);

  return (
    <div ref={ref} className={`overflow-hidden pointer-events-none select-none ${className}`}>
      <motion.p
        style={{
          x,
          fontSize: `${size}vw`,
          opacity,
          lineHeight: 0.85,
          letterSpacing: "-0.05em",
        }}
        className="font-display font-bold text-text-primary whitespace-nowrap -ml-[3vw]"
      >
        {children}
      </motion.p>
    </div>
  );
}
