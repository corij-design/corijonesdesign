"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TypeWeightProps {
  children: string;
  /** Starting weight (300-700 for Space Grotesk) */
  weightFrom?: number;
  /** Ending weight */
  weightTo?: number;
  className?: string;
}

export function TypeWeight({
  children,
  weightFrom = 300,
  weightTo = 700,
  className = "",
}: TypeWeightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const fontWeight = useTransform(scrollYProgress, [0.2, 0.8], [weightFrom, weightTo]);

  return (
    <div ref={ref}>
      <motion.p
        style={{ fontWeight }}
        className={`font-display ${className}`}
      >
        {children}
      </motion.p>
    </div>
  );
}
