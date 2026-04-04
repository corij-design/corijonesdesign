"use client";

import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import { TypeWeight } from "@/components/typography/type-weight";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

const study = caseStudies[1];
const next = caseStudies[2];

// ---------------------------------------------------------------
// Coherence infrastructure — what was built from zero
// ---------------------------------------------------------------
const coherenceStack = [
  {
    layer: "Decision Rights",
    what: "Product trio model",
    detail: "PM + Designer + Eng Lead as equal partners",
  },
  {
    layer: "Shared Context",
    what: "Multi-year product vision",
    detail: "Research-grounded, communicated through prototypes",
  },
  {
    layer: "Explicit Outcomes",
    what: "Strategic roadmap",
    detail: "Each phase tied to lifecycle opportunity + clear ownership",
  },
  {
    layer: "Ownership Architecture",
    what: "Embedded research + design system",
    detail: "Capabilities within trios, not siloed functions",
  },
  {
    layer: "Culture Infrastructure",
    what: "Design Summit",
    detail: "Recurring ritual for alignment, not just team-building",
  },
];

export default function BuildingCoherencePage() {
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
        {/* PULL QUOTE */}
        {/* ============================================== */}
        <div className="my-16 lg:my-24">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
              <blockquote className="border-l-2 border-accent pl-8 lg:pl-12">
                <p className="text-heading-lg font-display font-semibold leading-[1.15] tracking-[-0.02em] text-text-primary">
                  The company didn&apos;t need a redesign.
                  <br />
                  It needed <span className="text-accent">coherence</span>.
                </p>
              </blockquote>
            </ScrollReveal>
          </Grid>
        </div>

        {/* ============================================== */}
        {/* COHERENCE STACK — what was built from zero */}
        {/* ============================================== */}
        <div className="border-y border-border-default py-16 lg:py-20 my-8">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em] mb-3">
                Coherence Stack
              </h2>
              <p className="text-body-sm text-text-secondary leading-[1.6] max-w-[28ch]">
                Five layers of structural infrastructure, built from zero in two years.
              </p>
            </ScrollReveal>

            <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-5">
              {coherenceStack.map((item, i) => (
                <ScrollReveal key={item.layer} delay={i * 0.06}>
                  <div className="flex items-start gap-5 mb-8 last:mb-0">
                    {/* Layer number + connector */}
                    <div className="flex flex-col items-center shrink-0 pt-1">
                      <div className="w-7 h-7 rounded-full border border-accent/30 flex items-center justify-center">
                        <span className="text-caption font-mono text-accent" style={{ fontSize: "0.65rem" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      {i < coherenceStack.length - 1 && (
                        <div
                          className="w-px h-8 mt-1"
                          style={{
                            backgroundColor: "var(--accent)",
                            opacity: 0.15,
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="-mt-0.5">
                      <p className="text-caption uppercase text-accent font-mono tracking-[0.08em] mb-1">
                        {item.layer}
                      </p>
                      <p className="text-body-md font-display font-semibold leading-[1.3] text-text-primary">
                        {item.what}
                      </p>
                      <p className="text-body-sm text-text-secondary leading-[1.5] mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Grid>
        </div>

        {/* ============================================== */}
        {/* THE APPROACH */}
        {/* ============================================== */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mt-16 mb-8">
            <h2 className="text-caption uppercase text-text-tertiary font-mono mb-8 tracking-[0.08em]">
              The Approach
            </h2>
          </ScrollReveal>
        </Grid>

        {/* Step 1 — with callout */}
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
                Trio Model
              </p>
              <p className="text-caption text-text-tertiary font-mono tracking-[0.08em]">
                PM + Designer + Eng Lead
              </p>
            </div>
          </ScrollReveal>
        </Grid>

        {/* Step 2 */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-12">
            <div className="flex gap-6">
              <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                02
              </span>
              <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                {study.approach[1]}
              </p>
            </div>
          </ScrollReveal>
        </Grid>

        {/* Step 3 — with callout */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-2 mb-12">
            <div className="flex gap-6">
              <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                03
              </span>
              <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                {study.approach[2]}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-8 mb-12">
            <div className="border-l border-accent/20 pl-6">
              <p className="text-heading-md font-display font-semibold text-text-primary leading-[1.15] mb-2">
                &ldquo;When can we start?&rdquo;
              </p>
              <p className="text-caption text-text-tertiary font-mono tracking-[0.08em]">
                Company-wide momentum shift
              </p>
            </div>
          </ScrollReveal>
        </Grid>

        {/* Mega type break */}
        <div className="my-8 lg:my-16">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
              <TypeWeight
                className="text-display-xl leading-[0.85] tracking-[-0.04em] text-text-primary/10"
                weightFrom={300}
                weightTo={700}
              >
                1 in 7 U.S. loans.
              </TypeWeight>
            </ScrollReveal>
          </Grid>
        </div>

        {/* Steps 4–7 */}
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
        {/* BEFORE / AFTER */}
        {/* ============================================== */}
        <div className="border-y border-border-default py-16 lg:py-20 my-8">
          <Grid>
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em] mb-3">
                Before → After
              </h2>
              <p className="text-body-sm text-text-secondary leading-[1.6] max-w-[28ch]">
                Two years of structural investment.
              </p>
            </ScrollReveal>

            {/* Before */}
            <ScrollReveal delay={0.05} className="col-span-2 md:col-span-4 lg:col-span-3 lg:col-start-5 mb-6 lg:mb-0">
              <p className="text-caption uppercase text-text-tertiary font-mono mb-4 tracking-[0.08em]">
                Before
              </p>
              <div className="space-y-4">
                {[
                  "5 designers, no shared process",
                  "No design system",
                  "No product vision",
                  "No user research practice",
                  "Database-model navigation",
                  "0 product screenshots on website",
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

            {/* After */}
            <ScrollReveal delay={0.15} className="col-span-2 md:col-span-4 lg:col-span-3 lg:col-start-8">
              <p className="text-caption uppercase text-accent font-mono mb-4 tracking-[0.08em]">
                After
              </p>
              <div className="space-y-4">
                {[
                  "12 designers in product trios",
                  "Unified system: iOS, Android, web",
                  "Multi-year vision, company-wide buy-in",
                  "Research embedded in every trio",
                  "User-mental-model navigation",
                  "$1.2B acquisition (UX cited as top factor)",
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
        {/* OUTCOME */}
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
                  &ldquo;UX was cited as a top factor in the acquisition — not
                  because the screens were pretty, but because the product&apos;s
                  structural coherence was a competitive moat the acquirer
                  couldn&apos;t replicate quickly.&rdquo;
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
                    Next: {next.title.split(" ").slice(0, 4).join(" ")}… →
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
