import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import Link from "next/link";
import { about } from "@/lib/content";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-24">
        {/* Header */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2 mb-20">
            <p className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              05 — About
            </p>
            <h1 className="text-display-md font-display font-bold mb-8 leading-[0.95] tracking-[-0.025em] max-w-[18ch]">
              {about.headline}
            </h1>
            <p className="text-body-lg text-text-secondary leading-[1.7] max-w-[56ch]">
              {about.intro}
            </p>
          </ScrollReveal>
        </Grid>

        {/* Philosophy */}
        <div className="border-t border-border-default">
          <Grid className="py-20">
            <ScrollReveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                Philosophy
              </h2>
            </ScrollReveal>
            <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-5 space-y-12">
              {about.philosophy.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <h3 className="text-heading-sm font-display font-semibold mb-3 leading-[1.25] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-text-secondary leading-[1.7] max-w-[48ch]">
                    {item.body}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </Grid>
        </div>

        {/* Background */}
        <div className="border-t border-border-default">
          <Grid className="py-20">
            <ScrollReveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                Background
              </h2>
            </ScrollReveal>
            <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-5 space-y-12">
              {about.background.map((item, i) => (
                <ScrollReveal key={item.period} delay={i * 0.08}>
                  <p className="text-caption uppercase text-accent font-mono mb-2 tracking-[0.08em]">
                    {item.period}
                  </p>
                  <h3 className="text-heading-sm font-display font-semibold mb-3 leading-[1.25] tracking-[-0.01em]">
                    {item.role}
                  </h3>
                  <p className="text-body-md text-text-secondary leading-[1.7] max-w-[48ch]">
                    {item.context}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </Grid>
        </div>

        {/* Values */}
        <div className="border-t border-border-default">
          <Grid className="py-20">
            <ScrollReveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
              <h2 className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                Values
              </h2>
            </ScrollReveal>
            <div className="col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-5 space-y-8">
              {about.values.map((v, i) => (
                <ScrollReveal key={v.word} delay={i * 0.06}>
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-heading-sm font-display font-semibold leading-[1.25] tracking-[-0.01em] shrink-0">
                      {v.word}
                    </h3>
                    <p className="text-body-md text-text-secondary leading-[1.6]">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Grid>
        </div>

        {/* Contact CTA */}
        <div className="border-t border-border-default">
          <Grid className="py-20">
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2">
              <h2 className="text-heading-lg font-display font-bold mb-4 leading-[1.1] tracking-[-0.02em]">
                Want to talk about{" "}
                <span className="text-accent">what&apos;s broken</span>?
              </h2>
              <p className="text-body-lg text-text-secondary mb-8 max-w-[48ch] leading-[1.6]">
                I&apos;m always interested in conversations about product
                organizations, design leadership, and the systems underneath both.
              </p>
              <div className="flex gap-6">
                <a
                  href="mailto:cori@corijonesdesign.com"
                  className="text-body-md font-display font-medium text-accent hover:text-accent-hover transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/corijonesdesign"
                  className="text-body-md font-display font-medium text-text-secondary hover:text-text-primary transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </Grid>
        </div>

        {/* Back link */}
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2 pt-4">
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
