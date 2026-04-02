"use client";

import { motion } from "framer-motion";
import { Grid } from "@/components/grid/grid";

// Orchestration: each element has a delay that creates the sequence
const sequence = {
  gridLines: 0.3,
  accentLine: 0.4,
  sectionMarker: 0.6,
  name: 0.8,
  title: 1.0,
  headline: 1.4,
  headlineAccent: 1.8,
  body: 2.0,
  scrollHint: 2.5,
};

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeOut },
  }),
};

const fade = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-end pb-16 lg:pb-24">
      {/* Constrained container for all positioned elements */}
      <div
        className="absolute inset-0 max-w-[1536px] mx-auto"
        style={{
          paddingLeft: "var(--grid-margin)",
          paddingRight: "var(--grid-margin)",
        }}
      >
        {/* --- Background grid lines --- */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={sequence.gridLines}
        >
          <div
            className="h-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(var(--grid-columns), 1fr)",
              gap: "var(--grid-gutter)",
              paddingLeft: "var(--grid-margin)",
              paddingRight: "var(--grid-margin)",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full border-x border-text-primary/[0.03] hidden lg:block [&:nth-child(-n+4)]:block md:[&:nth-child(-n+8)]:block"
              />
            ))}
          </div>
        </motion.div>

        {/* --- Accent plumb line at column 5/6 boundary --- */}
        <motion.div
          className="absolute inset-y-0 pointer-events-none hidden lg:block"
          style={{
            left: "calc(var(--grid-margin) + (5 * ((100% - 2 * var(--grid-margin) - 11 * var(--grid-gutter)) / 12 + var(--grid-gutter))))",
          }}
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={sequence.accentLine}
        >
          <div
            className="h-full"
            style={{
              width: "1px",
              backgroundColor: "var(--accent)",
              opacity: 0.05,
            }}
          />
        </motion.div>

        {/* Section marker moved outside this container — see below */}

        {/* --- Scroll indicator: bottom-right --- */}
        <motion.div
          className="absolute bottom-8 flex items-end gap-3"
          style={{ right: "var(--grid-margin)" }}
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={sequence.scrollHint}
        >
          <p
            className="text-text-tertiary font-mono uppercase"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </p>
          <motion.div
            style={{
              width: "0.5px",
              height: "48px",
              backgroundColor: "var(--text-tertiary)",
              opacity: 0.5,
              transformOrigin: "top",
            }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* --- Main content --- */}
      <Grid className="relative z-10 w-full">
        {/* Name + Title: tight unit, columns 2-9 on desktop */}
        <div className="col-span-4 md:col-span-7 md:col-start-1 lg:col-span-8 lg:col-start-2">
          {/* Name — architectural scale */}
          <motion.h1
            className="text-hero-name font-display font-bold"
            style={{ lineHeight: "0.85", letterSpacing: "-0.05em" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={sequence.name}
          >
            Cori Jones
          </motion.h1>

          {/* Title — tight to name (4-8px gap) */}
          <motion.p
            className="text-heading-md font-display font-medium text-text-secondary"
            style={{ marginTop: "0.35rem", lineHeight: "1.15" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={sequence.title}
          >
            Design &amp; Product Strategy
          </motion.p>

          {/* Hero sentence — medium breath below title (32-48px) */}
          <motion.p
            className="text-display-md font-display font-semibold"
            style={{
              marginTop: "clamp(2rem, 3vw, 3rem)",
              lineHeight: "0.95",
              letterSpacing: "-0.025em",
            }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={sequence.headline}
          >
            I fix what breaks between{" "}
            <motion.span
              className="text-accent"
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={sequence.headlineAccent}
            >
              strategy and execution
            </motion.span>
            .
          </motion.p>

          {/* Body — tight to headline (16-24px) */}
          <motion.p
            className="text-body-lg text-text-secondary max-w-[56ch]"
            style={{ marginTop: "1.25rem", lineHeight: "1.6" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={sequence.body}
          >
            Twenty-five years in design and design leadership, diagnosing
            why talented teams underperform and designing the structural
            conditions that let them thrive.
          </motion.p>

          {/* Book line */}
          <motion.p
            className="text-body-md font-mono text-text-tertiary max-w-[56ch]"
            style={{ marginTop: "1.25rem", lineHeight: "1.5", letterSpacing: "0.02em" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={sequence.scrollHint - 0.2}
          >
            Writing{" "}
            <span className="text-text-secondary italic">
              The Coherence Gap: Why Organizations Break Between Strategy and Execution
            </span>
          </motion.p>
        </div>
      </Grid>
    </section>
  );
}
