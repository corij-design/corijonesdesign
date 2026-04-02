"use client";

import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import { TypeWeight } from "@/components/typography/type-weight";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

const study = caseStudies[0];
const next = caseStudies[1];

// ---------------------------------------------------------------
// Cascade diagram data — the five failure modes this engagement hit
// ---------------------------------------------------------------
const cascadeSteps = [
  {
    label: "5 Definitions of Quality",
    mode: "Unclear Outcomes",
    active: true,
  },
  {
    label: "Competing roadmaps across BUs",
    mode: "Priority Thrash",
    active: true,
  },
  {
    label: "Designers waiting years to ship",
    mode: "Collapsed Ownership",
    active: true,
  },
  {
    label: "54 button styles, 5 design systems",
    mode: "Misaligned Constraints",
    active: true,
  },
  {
    label: "Process without product progress",
    mode: "Process as Shield",
    active: false,
  },
];

export default function ClosingTheGapPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-24">
        {/* ============================================== */}
        {/* HEADER */}
        {/* ============================================== */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2 mb-8">
            <Link
              href="/work"
              className="text-caption uppercase font-mono text-text-tertiary hover:text-accent transition-colors tracking-[0.08em] inline-block mb-8"
              style={{ transitionDuration: "var(--duration-base)" }}
            >
              ← 01 — Work
            </Link>
            <p className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              {study.meta}
            </p>
            <h1 className="text-display-md font-display font-bold mb-4 leading-[0.95] tracking-[-0.025em]">
              {study.title}
            </h1>
            <p className="text-heading-sm font-display text-text-secondary leading-[1.35] max-w-[56ch]">
              {study.subtitle}
            </p>
          </ScrollReveal>
        </Grid>

        {/* ============================================== */}
        {/* STATS BAR */}
        {/* ============================================== */}
        <div className="border-y border-border-default my-12">
          <Grid className="py-10">
            {study.heroStats.map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                delay={i * 0.08}
                className={`col-span-2 md:col-span-2 lg:col-span-2${i === 0 ? " lg:col-start-2" : ""}`}
              >
                <p className="text-heading-lg font-display font-bold text-accent leading-[1] mb-2">
                  {stat.value}
                </p>
                <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </Grid>
        </div>

        {/* ============================================== */}
        {/* THE CHALLENGE */}
        {/* ============================================== */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-12">
            <h2 className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              The Challenge
            </h2>
            <p className="text-body-lg text-text-primary leading-[1.7] max-w-[60ch]">
              {study.challenge}
            </p>
          </ScrollReveal>
        </Grid>

        {/* ============================================== */}
        {/* PULL QUOTE — editorial break */}
        {/* ============================================== */}
        <div className="my-16 lg:my-24">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
              <blockquote className="border-l-2 border-accent pl-8 lg:pl-12">
                <p className="text-heading-lg font-display font-semibold leading-[1.15] tracking-[-0.02em] text-text-primary">
                  Leadership assumed it was a design problem.
                  <br />
                  <span className="text-accent">It wasn&apos;t.</span>
                  <br />
                  It was a coherence problem.
                </p>
              </blockquote>
            </ScrollReveal>
          </Grid>
        </div>

        {/* ============================================== */}
        {/* CASCADE DIAGRAM — the failure modes at play */}
        {/* ============================================== */}
        <div className="border-y border-border-default py-16 lg:py-20 my-8">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em] mb-3">
                The Cascade
              </h2>
              <p className="text-body-sm text-text-secondary leading-[1.6] max-w-[28ch]">
                Four of five failure modes from{" "}
                <em className="text-text-primary">The Coherence Gap</em> were
                active in this organization.
              </p>
            </ScrollReveal>

            <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-5">
              {cascadeSteps.map((step, i) => (
                <ScrollReveal key={step.mode} delay={i * 0.06}>
                  <div className="flex items-start gap-5 mb-6 last:mb-0">
                    {/* Vertical connector + indicator */}
                    <div className="flex flex-col items-center shrink-0 pt-1">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          step.active
                            ? "bg-accent"
                            : "border border-border-default bg-transparent"
                        }`}
                      />
                      {i < cascadeSteps.length - 1 && (
                        <div
                          className="w-px h-10 mt-1"
                          style={{
                            backgroundColor: step.active
                              ? "var(--accent)"
                              : "var(--border)",
                            opacity: step.active ? 0.3 : 0.5,
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="-mt-0.5">
                      <p
                        className={`text-body-md font-display font-semibold leading-[1.3] ${
                          step.active ? "text-text-primary" : "text-text-tertiary"
                        }`}
                      >
                        {step.mode}
                      </p>
                      <p
                        className={`text-body-sm leading-[1.5] mt-0.5 ${
                          step.active
                            ? "text-text-secondary"
                            : "text-text-tertiary"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Grid>
        </div>

        {/* ============================================== */}
        {/* THE APPROACH — with inline callout stats */}
        {/* ============================================== */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mt-16 mb-8">
            <h2 className="text-caption uppercase text-text-tertiary font-mono mb-8 tracking-[0.08em]">
              The Approach
            </h2>
          </ScrollReveal>
        </Grid>

        {/* Approach step 1 — with callout */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-2 mb-12">
            <div className="flex gap-6">
              <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                01
              </span>
              <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                {study.approach[0]}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-8 mb-12">
            <div className="border-l border-accent/20 pl-6">
              <p className="text-display-md font-display font-bold text-accent leading-[0.95] mb-2">
                Agency → Partners
              </p>
              <p className="text-caption text-text-tertiary font-mono tracking-[0.08em]">
                Design model shift
              </p>
            </div>
          </ScrollReveal>
        </Grid>

        {/* Approach step 2 — with callout */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-2 mb-12">
            <div className="flex gap-6">
              <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                02
              </span>
              <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                {study.approach[1]}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-8 mb-12">
            <div className="border-l border-accent/20 pl-6">
              <p className="text-display-md font-display font-bold text-accent leading-[0.95] mb-2">
                ~3 mo
              </p>
              <p className="text-caption text-text-tertiary font-mono tracking-[0.08em]">
                New feature to shipped SKU
              </p>
            </div>
          </ScrollReveal>
        </Grid>

        {/* Approach step 3 — pull quote inline */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-12">
            <div className="flex gap-6">
              <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                03
              </span>
              <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                {study.approach[2]}
              </p>
            </div>
          </ScrollReveal>
        </Grid>

        {/* Mid-section callout — big number break */}
        <div className="my-8 lg:my-16">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
              <TypeWeight
                className="text-display-xl leading-[0.85] tracking-[-0.04em] text-text-primary/10"
                weightFrom={300}
                weightTo={700}
              >
                54 button styles.
              </TypeWeight>
            </ScrollReveal>
          </Grid>
        </div>

        {/* Approach steps 4–7 — standard rhythm */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-12">
            <div className="space-y-6">
              {study.approach.slice(3).map((step, i) => (
                <div key={i + 3} className="flex gap-6">
                  <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Grid>

        {/* ============================================== */}
        {/* BEFORE / AFTER — inline comparison */}
        {/* ============================================== */}
        <div className="border-y border-border-default py-16 lg:py-20 my-8">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em] mb-3">
                Before → After
              </h2>
              <p className="text-body-sm text-text-secondary leading-[1.6] max-w-[28ch]">
                Structural changes, not cosmetic ones.
              </p>
            </ScrollReveal>

            {/* Before column */}
            <ScrollReveal delay={0.05} className="col-span-2 md:col-span-4 lg:col-span-3 lg:col-start-5 mb-6 lg:mb-0">
              <p className="text-caption uppercase text-text-tertiary font-mono mb-4 tracking-[0.08em]">
                Before
              </p>
              <div className="space-y-4">
                {[
                  "5 design systems",
                  "Agency model (random assignment)",
                  "0 user research panel",
                  "Years in design queue",
                  "No shared product vision",
                  "No AI design strategy",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-body-sm text-text-tertiary leading-[1.5] border-b border-border-default pb-3"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* After column */}
            <ScrollReveal delay={0.15} className="col-span-2 md:col-span-4 lg:col-span-3 lg:col-start-8">
              <p className="text-caption uppercase text-accent font-mono mb-4 tracking-[0.08em]">
                After
              </p>
              <div className="space-y-4">
                {[
                  "1 global design standard",
                  "Strategic partnerships (owned domains)",
                  "272,000-person research panel",
                  "Concept to ship in months",
                  "3-metric constellation + shared vision",
                  "Full AI product prototype strategy",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-body-sm text-text-primary leading-[1.5] border-b border-accent/15 pb-3"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </Grid>
        </div>

        {/* ============================================== */}
        {/* OUTCOME — with closing pull quote */}
        {/* ============================================== */}
        <Grid className="py-16">
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-12">
            <h2 className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              The Outcome
            </h2>
            <p className="text-body-lg text-text-primary leading-[1.7] max-w-[60ch]">
              {study.outcome}
            </p>
          </ScrollReveal>
        </Grid>

        {/* Closing pull quote */}
        <div className="mb-16 lg:mb-24">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-3">
              <blockquote className="border-l-2 border-accent pl-8 lg:pl-12">
                <p className="text-heading-md font-display font-medium leading-[1.25] tracking-[-0.015em] text-text-secondary italic">
                  &ldquo;You cannot fix what you cannot see. The audit made the
                  Coherence Gap visible. Everything that followed was structural
                  intervention.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </Grid>
        </div>

        {/* ============================================== */}
        {/* TAGS + NAV */}
        {/* ============================================== */}
        <div className="border-t border-border-default">
          <Grid className="pt-12 pb-16">
            <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2">
              <div className="flex flex-wrap gap-3 mb-12">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-caption text-text-tertiary font-mono border border-border-default px-3 py-1 tracking-[0.04em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href="/work"
                  className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  ← All Work
                </Link>
                {next && (
                  <Link
                    href={`/work/${next.slug}`}
                    className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
                    style={{ transitionDuration: "var(--duration-base)" }}
                  >
                    Next: {next.title.split(" ").slice(0, 3).join(" ")}… →
                  </Link>
                )}
              </div>
            </div>
          </Grid>
        </div>
      </main>
    </PageTransition>
  );
}
