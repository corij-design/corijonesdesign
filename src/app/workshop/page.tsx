import { Grid } from "@/components/grid/grid";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { PageTransition } from "@/components/motion/page-transition";
import Link from "next/link";

export default function WorkshopPage() {
  return (
    <PageTransition>
      <main className="min-h-screen py-24">
      <Grid>
        <ScrollReveal className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-2">
          <p className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
            03 — Workshop
          </p>
          <h1 className="text-display-lg font-display font-bold mb-8 leading-[0.92] tracking-[-0.03em]">
            Workshop
          </h1>
          <p className="text-body-lg text-text-secondary max-w-[50ch] leading-[1.6] mb-12">
            Prototypes, tools, and vibe-coded experiments. Coming soon.
          </p>
          <Link
            href="/"
            className="text-body-md font-mono text-text-tertiary hover:text-accent transition-colors"
            style={{ transitionDuration: "var(--duration-base)" }}
          >
            ← Back
          </Link>
        </ScrollReveal>
      </Grid>
    </main>
    </PageTransition>
  );
}
