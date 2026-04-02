import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import Link from "next/link";
import { essays } from "@/lib/content";

export default function ThinkingPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-24">
        {/* Page header */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-20">
            <p className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              02 — Thinking
            </p>
            <h1 className="text-display-lg font-display font-bold mb-6 leading-[0.92] tracking-[-0.03em]">
              Writing
            </h1>
            <p className="text-body-lg text-text-secondary max-w-[52ch] leading-[1.6]">
              Adapted from <em>The Coherence Gap</em> — a book about the
              structural patterns that silently erode product organizations.
              These essays explore the frameworks, diagnostic tools, and
              leadership principles behind the work.
            </p>
          </ScrollReveal>
        </Grid>

        {/* Essay list */}
        <div className="space-y-0">
          {essays.map((essay, i) => (
            <ScrollReveal key={essay.slug} delay={i * 0.05}>
              <Link href={`/thinking/${essay.slug}`} className="group block">
                <div
                  className="border-t border-border-default hover:border-accent/30 transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  <Grid className="py-10 lg:py-12">
                    {/* Tag */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-2">
                      <p className="text-caption uppercase text-accent font-mono tracking-[0.08em]">
                        {essay.tag}
                      </p>
                    </div>

                    {/* Title + description */}
                    <div className="col-span-3 md:col-span-5 lg:col-span-5 lg:col-start-4">
                      <h2
                        className="text-heading-md font-display font-semibold mb-2 leading-[1.15] tracking-[-0.015em] group-hover:text-accent transition-colors"
                        style={{ transitionDuration: "var(--duration-base)" }}
                      >
                        {essay.title}
                      </h2>
                      <p className="text-body-sm text-text-secondary leading-[1.6] max-w-[48ch]">
                        {essay.description}
                      </p>
                    </div>

                    {/* Read time */}
                    <div className="col-span-4 md:col-span-2 lg:col-span-2 lg:col-start-9 mt-3 md:mt-0 flex items-start">
                      <p className="text-caption text-text-tertiary font-mono tracking-[0.08em]">
                        {essay.readTime}
                      </p>
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
