"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypeRevealProps {
  children: string;
  /** "char" reveals letter by letter, "word" reveals word by word */
  mode?: "char" | "word";
  /** Base delay before animation starts */
  delay?: number;
  /** Stagger between each unit */
  stagger?: number;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TypeReveal({
  children,
  mode = "word",
  delay = 0,
  stagger = 0.04,
  className = "",
  tag: Tag = "h2",
}: TypeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const units = mode === "char" ? children.split("") : children.split(" ");

  return (
    <Tag ref={ref as React.Ref<never>} className={`overflow-hidden ${className}`}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={isInView ? { y: "0%", opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ marginRight: mode === "word" ? "0.3em" : undefined }}
        >
          {unit}
        </motion.span>
      ))}
    </Tag>
  );
}
