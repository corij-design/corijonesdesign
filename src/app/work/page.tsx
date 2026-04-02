import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

export default function WorkPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-24">
        {/* Page header */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-20">
            <p className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              01 — Work
            </p>
            <h1 className="text-display-lg font-display font-bold mb-6 leading-[0.92] tracking-[-0.03em]">
              Case studies in organizational coherence
            </h1>
            <p className="text-body-lg text-text-secondary max-w-[52ch] leading-[1.6]">
              Every engagement starts the same way: something&apos;s not working,
              and the usual fixes haven&apos;t fixed it. These are stories about
              finding the structural root and designing the system to hold.
            </p>
          </ScrollReveal>
        </Grid>

        {/* Case study list */}
        <div className="space-y-0">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.slug} delay={i * 0.05}>
              <Link href={`/work/${study.slug}`} className="group block">
                <div
                  className="border-t border-border-default hover:border-accent/30 transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  <Grid className="py-12 lg:py-16">
                    {/* Number */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1 lg:col-start-2">
                      <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                        {study.number}
                      </p>
                    </div>

                    {/* Title + description */}
                    <div className="col-span-3 md:col-span-5 lg:col-span-5 lg:col-start-3">
                      <h2
                        className="text-heading-md font-display font-semibold mb-3 leading-[1.15] tracking-[-0.015em] group-hover:text-accent transition-colors"
                        style={{ transitionDuration: "var(--duration-base)" }}
                      >
                        {study.title}
                      </h2>
                      <p className="text-body-sm text-text-secondary leading-[1.6] max-w-[48ch]">
                        {study.description}
                      </p>
                    </div>

                    {/* Meta + tags */}
                    <div className="col-span-4 md:col-span-2 lg:col-span-3 lg:col-start-8 mt-4 md:mt-0">
                      <p className="text-caption uppercase text-text-tertiary font-mono mb-3 tracking-[0.08em]">
                        {study.meta}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-caption text-text-tertiary font-mono border border-border-default px-2 py-0.5 tracking-[0.04em]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Grid>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border-default" />
        </div>

        {/* Back link */}
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2 pt-16">
            <Link
              href="/"
              className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
              style={{ transitionDuration: "var(--duration-base)" }}
            >
              ← Back
            </Link>
          </div>
        </Grid>
      </main>
    </PageTransition>
  );
}
