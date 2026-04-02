import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="min-h-screen py-24">
        {/* Header */}
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

        {/* Stats bar */}
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

        {/* Challenge */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-20">
            <h2 className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              The Challenge
            </h2>
            <p className="text-body-lg text-text-primary leading-[1.7] max-w-[60ch]">
              {study.challenge}
            </p>
          </ScrollReveal>
        </Grid>

        {/* Approach */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-20">
            <h2 className="text-caption uppercase text-text-tertiary font-mono mb-8 tracking-[0.08em]">
              The Approach
            </h2>
            <div className="space-y-6">
              {study.approach.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-caption font-mono text-accent shrink-0 mt-1.5 tracking-[0.08em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body-md text-text-secondary leading-[1.7] max-w-[54ch]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Grid>

        {/* Outcome */}
        <div className="border-t border-border-default">
          <Grid className="py-16">
            <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2">
              <h2 className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
                The Outcome
              </h2>
              <p className="text-body-lg text-text-primary leading-[1.7] max-w-[60ch]">
                {study.outcome}
              </p>
            </ScrollReveal>
          </Grid>
        </div>

        {/* Tags */}
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2 pt-8 pb-16">
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

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Link
                href="/work"
                className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                ← All Work
              </Link>
              {(() => {
                const currentIndex = caseStudies.findIndex(
                  (s) => s.slug === study.slug
                );
                const next = caseStudies[currentIndex + 1];
                if (!next) return null;
                return (
                  <Link
                    href={`/work/${next.slug}`}
                    className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
                    style={{ transitionDuration: "var(--duration-base)" }}
                  >
                    Next: {next.title.split(" ").slice(0, 3).join(" ")}… →
                  </Link>
                );
              })()}
            </div>
          </div>
        </Grid>
      </main>
    </PageTransition>
  );
}
