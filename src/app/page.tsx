import { Hero } from "@/components/sections/hero";
import { SectionBreak } from "@/components/sections/section-break";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TypeWeight } from "@/components/typography/type-weight";
import { Grid, GridOverlay } from "@/components/grid/grid";
import { SectionMarker } from "@/components/ui/section-marker";
import { caseStudies, essays } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <GridOverlay />
      <SectionMarker />

      {/* === HERO === */}
      <div id="hero">
        <Hero />
      </div>

      {/* === BREAK: SYSTEMS === */}
      <SectionBreak word="SYSTEMS" nextSection="01" nextLabel="Work" />

      {/* === WORK PREVIEW === */}
      <section id="work" className="pb-32">
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2">
            <ScrollReveal>
              <TypeWeight className="text-display-lg mb-16 leading-[0.92] tracking-[-0.03em]">
                What I&apos;ve built
              </TypeWeight>
            </ScrollReveal>
          </div>

          {/* Case study cards — first 3 from content */}
          {caseStudies.slice(0, 3).map((study, i) => (
            <ScrollReveal
              key={study.slug}
              delay={i * 0.1}
              className={`col-span-4 md:col-span-4 lg:col-span-3${i === 0 ? " lg:col-start-2" : ""}`}
            >
              <Link href={`/work/${study.slug}`} className="group block h-full">
                <div
                  className="bg-bg-secondary border border-border-default p-8 h-full transition-all ease-out-expo hover:-translate-y-0.5 hover:border-border-accent"
                  style={{
                    transitionDuration: "var(--duration-base)",
                  }}
                >
                  <p className="text-caption uppercase text-text-tertiary font-mono mb-4 tracking-[0.08em]">
                    {study.meta}
                  </p>
                  <h3
                    className="text-heading-sm font-display font-semibold mb-4 leading-[1.2] tracking-[-0.01em] group-hover:text-accent transition-colors"
                    style={{ transitionDuration: "var(--duration-base)" }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary leading-[1.5]">
                    {study.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* View all link */}
          <ScrollReveal delay={0.35} className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 mt-8">
            <Link
              href="/work"
              className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors tracking-[0.04em]"
              style={{ transitionDuration: "var(--duration-base)" }}
            >
              View all case studies →
            </Link>
          </ScrollReveal>
        </Grid>
      </section>

      {/* === BREAK: THINKING === */}
      <SectionBreak word="COHERENCE" nextSection="02" nextLabel="Thinking" />

      {/* === THINKING PREVIEW === */}
      <section id="thinking" className="pb-32">
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-6 lg:col-span-7 lg:col-start-2">
            <TypeWeight className="text-display-lg mb-8 leading-[0.92] tracking-[-0.03em]" weightFrom={300} weightTo={600}>
              Writing
            </TypeWeight>
            <p className="text-body-lg text-text-secondary mb-12 max-w-[50ch] leading-[1.6]">
              Adapted from <em>The Coherence Gap</em> — a book about the structural
              patterns that silently erode product organizations.
            </p>
          </ScrollReveal>

          {/* Essay previews — from content */}
          {essays.slice(0, 3).map((essay, i) => (
            <ScrollReveal
              key={essay.slug}
              delay={i * 0.08}
              className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-2"
            >
              <Link href={`/thinking/${essay.slug}`} className="group block">
                <div
                  className="flex items-baseline justify-between py-6 border-b border-border-default hover:border-accent/30 transition-colors"
                  style={{ transitionDuration: "var(--duration-base)" }}
                >
                  <h3
                    className="text-heading-md font-display font-medium leading-[1.15] tracking-[-0.015em] group-hover:text-accent transition-colors"
                    style={{ transitionDuration: "var(--duration-base)" }}
                  >
                    {essay.title}
                  </h3>
                  <span className="text-caption uppercase text-text-tertiary font-mono ml-4 shrink-0 tracking-[0.08em]">
                    {essay.tag}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* View all link */}
          <ScrollReveal delay={0.3} className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-2 mt-8">
            <Link
              href="/thinking"
              className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors tracking-[0.04em]"
              style={{ transitionDuration: "var(--duration-base)" }}
            >
              View all essays →
            </Link>
          </ScrollReveal>
        </Grid>
      </section>

      {/* === BREAK: SIGNAL === */}
      <SectionBreak word="SIGNAL" nextSection="06" nextLabel="Connect" />

      {/* === CONTACT === */}
      <section id="contact" className="pb-32">
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-6 lg:col-span-7 lg:col-start-2">
            <h2 className="text-display-md font-display font-bold mb-6 leading-[0.95] tracking-[-0.025em]">
              Let&apos;s talk about{" "}
              <span className="text-accent">what&apos;s broken</span>.
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-[48ch] leading-[1.6]">
              I&apos;m always interested in conversations about product organizations,
              design leadership, and the systems underneath both.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:corijones@gmail.com"
                className="text-body-md font-display font-medium text-accent hover:text-accent-hover transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/cori-jones/"
                className="text-body-md font-display font-medium text-text-secondary hover:text-text-primary transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </Grid>
      </section>

      {/* === FOOTER BLEED === */}
      <div className="pb-24">
        <div className="overflow-hidden">
          <p
            className="font-display font-bold text-text-primary/[0.03] whitespace-nowrap select-none"
            style={{ fontSize: "15vw", lineHeight: "0.85", letterSpacing: "-0.05em" }}
          >
            THE COHERENCE GAP
          </p>
        </div>
      </div>
    </main>
  );
}
