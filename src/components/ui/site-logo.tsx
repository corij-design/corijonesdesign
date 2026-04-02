"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

// ---------------------------------------------------------------
// Geometry — pulled exactly from the source SVGs
// The two centers sit on an axis tilted ≈ -8.77° from horizontal
// ---------------------------------------------------------------
const APART = {
  leftCx: 84.7421,
  leftCy: 101.316,
  rightCx: 114.391,
  rightCy: 96.7421,
};
const MERGED = { cx: 99.7421, cy: 97.7421 };

// The lens / intersection path (from both SVGs — identical d)
const OVERLAP_D =
  "M90.6876 44.748C117.759 44.2732 141.697 63.8563 145.94 91.3626C150.183 118.869 133.259 144.754 107.303 152.459C80.2312 152.934 56.2936 133.352 52.0506 105.846C47.8075 78.3395 64.7312 52.4532 90.6876 44.748Z";

// Colors
const GRAY = "#C8C5C0";
const RED = "#E64E28";
const BLUE = "#06BCE4";
const GREEN = "#B2EF0B";
const BG = "#020319";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function AnimatedLogo() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const overlapControls = useAnimation();
  const animatingRef = useRef<"idle" | "entering" | "leaving">("idle");

  async function handleEnter() {
    animatingRef.current = "entering";

    // Phase 1: Flash the brand colors (circles stay apart)
    await Promise.all([
      leftControls.start({ fill: RED }, { duration: 0.18, ease: "easeOut" }),
      rightControls.start({ fill: BLUE }, { duration: 0.18, ease: "easeOut" }),
    ]);
    if (animatingRef.current !== "entering") return;

    // Phase 2: Animate circles together along the tilted axis
    await Promise.all([
      leftControls.start(
        { cx: MERGED.cx, cy: MERGED.cy },
        { duration: 0.38, ease }
      ),
      rightControls.start(
        { cx: MERGED.cx, cy: MERGED.cy },
        { duration: 0.38, ease }
      ),
    ]);
    if (animatingRef.current !== "entering") return;

    // Phase 3: Everything turns green (overlap path too, so it disappears)
    await Promise.all([
      leftControls.start({ fill: GREEN }, { duration: 0.2, ease: "easeOut" }),
      rightControls.start({ fill: GREEN }, { duration: 0.2, ease: "easeOut" }),
      overlapControls.start({ fill: GREEN }, { duration: 0.2, ease: "easeOut" }),
    ]);
  }

  async function handleLeave() {
    animatingRef.current = "leaving";

    // Phase 1: Flash back to brand colors + hide overlap
    await Promise.all([
      leftControls.start({ fill: RED }, { duration: 0.15, ease: "easeOut" }),
      rightControls.start({ fill: BLUE }, { duration: 0.15, ease: "easeOut" }),
      overlapControls.start({ fill: BG }, { duration: 0.1, ease: "easeOut" }),
    ]);
    if (animatingRef.current !== "leaving") return;

    // Phase 2: Animate circles apart
    await Promise.all([
      leftControls.start(
        { cx: APART.leftCx, cy: APART.leftCy },
        { duration: 0.38, ease }
      ),
      rightControls.start(
        { cx: APART.rightCx, cy: APART.rightCy },
        { duration: 0.38, ease }
      ),
    ]);
    if (animatingRef.current !== "leaving") return;

    // Phase 3: Fade to gray
    await Promise.all([
      leftControls.start({ fill: GRAY }, { duration: 0.25, ease: "easeOut" }),
      rightControls.start({ fill: GRAY }, { duration: 0.25, ease: "easeOut" }),
    ]);
    animatingRef.current = "idle";
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ overflow: "visible" }}
    >
      {/* Left circle — starts apart, gray */}
      <motion.circle
        cx={APART.leftCx}
        cy={APART.leftCy}
        r={55}
        fill={GRAY}
        animate={leftControls}
      />
      {/* Right circle — starts apart, gray */}
      <motion.circle
        cx={APART.rightCx}
        cy={APART.rightCy}
        r={55}
        fill={GRAY}
        animate={rightControls}
      />
      {/* Overlap / intersection — starts as bg cutout */}
      <motion.path
        d={OVERLAP_D}
        fill={BG}
        animate={overlapControls}
      />
    </svg>
  );
}

export function SiteLogo() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();

  // On homepage: logo starts at 56px, scales to 32px over first 300px scroll
  const size = useTransform(scrollY, [0, 300], [56, 32]);
  const opacity = useTransform(scrollY, [0, 100], [0.9, 1]);

  if (isHome) {
    return (
      <motion.div
        className="fixed top-5 left-6 z-[102]"
        style={{ opacity }}
      >
        <Link href="/" aria-label="Back to home">
          <motion.div style={{ width: size, height: size }}>
            <AnimatedLogo />
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  // Sub-pages: always small + fixed
  return (
    <motion.div
      className="fixed top-5 left-6 z-[102]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease }}
    >
      <Link href="/" aria-label="Back to home">
        <div className="w-8 h-8">
          <AnimatedLogo />
        </div>
      </Link>
    </motion.div>
  );
}
