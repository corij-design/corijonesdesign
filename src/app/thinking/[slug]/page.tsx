import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import Link from "next/link";
import { essays } from "@/lib/content";
import { notFound } from "next/navigation";

interface EssayPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);

  if (!essay) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="min-h-screen py-24">
        {/* Header */}
        <Grid>
          <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2 mb-16">
            <Link
              href="/thinking"
              className="text-caption uppercase font-mono text-text-tertiary hover:text-accent transition-colors tracking-[0.08em] inline-block mb-8"
              style={{ transitionDuration: "var(--duration-base)" }}
            >
              ← 02 — Thinking
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-caption uppercase text-accent font-mono tracking-[0.08em]">
                {essay.tag}
              </span>
              <span className="text-caption text-text-tertiary font-mono tracking-[0.08em]">
                {essay.readTime}
              </span>
            </div>
            <h1 className="text-display-md font-display font-bold mb-6 leading-[0.95] tracking-[-0.025em]">
              {essay.title}
            </h1>
            <p className="text-body-lg text-text-secondary leading-[1.6] max-w-[56ch]">
              {essay.description}
            </p>
          </ScrollReveal>
        </Grid>

        {/* Divider */}
        <div className="border-t border-border-default mb-16" />

        {/* Essay body */}
        <Grid>
          <div className="col-span-4 md:col-span-7 lg:col-span-6 lg:col-start-3">
            {essay.content.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <p className="text-body-lg text-text-primary leading-[1.8] mb-8 max-w-[60ch]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Grid>

        {/* Footer navigation */}
        <div className="border-t border-border-default mt-16">
          <Grid className="py-16">
            <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2 flex justify-between items-center">
              <Link
                href="/thinking"
                className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                ← All Essays
              </Link>
              {(() => {
                const currentIndex = essays.findIndex(
                  (e) => e.slug === essay.slug
                );
                const next = essays[currentIndex + 1];
                if (!next) return null;
                return (
                  <Link
                    href={`/thinking/${next.slug}`}
                    className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
                    style={{ transitionDuration: "var(--duration-base)" }}
                  >
                    Next: {next.title} →
                  </Link>
                );
              })()}
            </div>
          </Grid>
        </div>
      </main>
    </PageTransition>
  );
}
