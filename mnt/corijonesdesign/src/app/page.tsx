import { Grid, GridOverlay } from "@/components/grid/grid";
import { GridItem } from "@/components/grid/grid-item";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen py-24">
      <ThemeToggle />
      <GridOverlay />

      {/* === HERO === */}
      <section className="mb-32">
        <Grid>
          <GridItem span={[4, 8, 10]} start={[1, 1, 2]}>
            <p className="text-caption uppercase text-text-tertiary font-mono mb-6 tracking-[0.08em]">
              01 — Introduction
            </p>
            <h1 className="text-display-xl font-display font-bold mb-8 leading-[0.9] tracking-[-0.04em]">
              I design{" "}
              <span className="text-accent">systems</span>
              <br />
              that hold.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-[48ch] leading-[1.6]">
              VP of Product Design. Fifteen years building product
              organizations from the inside — diagnosing what&apos;s broken,
              designing the systems to fix it, and coaching the people who
              hold it together.
            </p>
          </GridItem>
        </Grid>
      </section>

      {/* === TYPE SCALE DEMO === */}
      <section className="mb-32">
        <Grid>
          <GridItem span={[4, 8, 12]}>
            <p className="text-caption uppercase text-text-tertiary font-mono mb-12 tracking-[0.08em]">
              02 — Type Scale
            </p>
          </GridItem>

          <GridItem span={[4, 8, 12]}>
            <div className="space-y-8 border-t border-border-default pt-8">
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  display-xl
                </p>
                <p className="text-display-xl font-display font-bold leading-[0.9] tracking-[-0.04em]">
                  The Coherence Gap
                </p>
              </div>
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  display-lg
                </p>
                <p className="text-display-lg font-display font-semibold leading-[0.92] tracking-[-0.03em]">
                  Priority Thrash
                </p>
              </div>
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  display-md
                </p>
                <p className="text-display-md font-display font-medium leading-[0.95] tracking-[-0.025em]">
                  Collapsed Ownership
                </p>
              </div>

              <hr className="border-border-default" />

              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  heading-lg
                </p>
                <p className="text-heading-lg font-display font-semibold leading-[1.1] tracking-[-0.02em]">
                  The system makes the behavior
                </p>
              </div>
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  heading-md
                </p>
                <p className="text-heading-md font-display font-medium leading-[1.15] tracking-[-0.015em]">
                  Decision Rights determine outcomes
                </p>
              </div>
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  heading-sm
                </p>
                <p className="text-heading-sm font-display font-medium leading-[1.2] tracking-[-0.01em]">
                  Context Stability is a structural property
                </p>
              </div>

              <hr className="border-border-default" />

              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  body-lg
                </p>
                <p className="text-body-lg text-text-secondary max-w-[65ch] leading-[1.6]">
                  When an organization suffers from Priority Thrash, context
                  has no time to travel. By the time the &quot;why&quot;
                  reaches the execution layer, the &quot;why&quot; has
                  already changed at the top.
                </p>
              </div>
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  body-md
                </p>
                <p className="text-body-md text-text-secondary max-w-[65ch] leading-[1.6]">
                  A learning cycle is the time required to ship a change,
                  gather meaningful usage data, and draw actionable
                  conclusions. For most product features, this is six to
                  eight weeks.
                </p>
              </div>

              <hr className="border-border-default" />

              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  caption / label
                </p>
                <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                  Section Marker · 2026
                </p>
              </div>
              <div>
                <p className="text-caption uppercase text-text-tertiary font-mono mb-2 tracking-[0.08em]">
                  mono
                </p>
                <p className="font-mono text-body-sm text-text-secondary">
                  const coherence = system.diagnose(organization);
                </p>
              </div>
            </div>
          </GridItem>
        </Grid>
      </section>

      {/* === COLOR DEMO === */}
      <section className="mb-32">
        <Grid>
          <GridItem span={[4, 8, 12]}>
            <p className="text-caption uppercase text-text-tertiary font-mono mb-12 tracking-[0.08em]">
              03 — Color System
            </p>
          </GridItem>

          <GridItem span={[4, 4, 3]}>
            <div className="space-y-4">
              <div className="h-24 rounded bg-bg-primary border border-border-default" />
              <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                bg-primary
              </p>
            </div>
          </GridItem>
          <GridItem span={[4, 4, 3]}>
            <div className="space-y-4">
              <div className="h-24 rounded bg-bg-secondary border border-border-default" />
              <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                bg-secondary
              </p>
            </div>
          </GridItem>
          <GridItem span={[4, 4, 3]}>
            <div className="space-y-4">
              <div className="h-24 rounded bg-bg-elevated border border-border-default" />
              <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                bg-elevated
              </p>
            </div>
          </GridItem>
          <GridItem span={[4, 4, 3]}>
            <div className="space-y-4">
              <div className="h-24 rounded bg-accent" />
              <p className="text-caption uppercase text-text-tertiary font-mono tracking-[0.08em]">
                accent
              </p>
            </div>
          </GridItem>

          {/* Text colors */}
          <GridItem span={[4, 8, 12]} className="mt-8">
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-heading-sm font-display text-text-primary leading-[1.2]">
                  Primary Text
                </p>
              </div>
              <div>
                <p className="text-heading-sm font-display text-text-secondary leading-[1.2]">
                  Secondary Text
                </p>
              </div>
              <div>
                <p className="text-heading-sm font-display text-text-tertiary leading-[1.2]">
                  Tertiary Text
                </p>
              </div>
              <div>
                <p className="text-heading-sm font-display text-accent leading-[1.2]">
                  Accent Text
                </p>
              </div>
            </div>
          </GridItem>
        </Grid>
      </section>

      {/* === GRID VIOLATION DEMO === */}
      <section className="mb-32 overflow-hidden">
        <Grid>
          <GridItem span={[4, 8, 12]}>
            <p className="text-caption uppercase text-text-tertiary font-mono mb-12 tracking-[0.08em]">
              04 — Grid Violations
            </p>
          </GridItem>
        </Grid>

        {/* This text intentionally breaks the grid — extends past margins */}
        <div style={{ paddingLeft: "var(--grid-margin)" }}>
          <h2
            className="text-display-xl font-display font-bold whitespace-nowrap leading-[0.9]"
            style={{
              marginLeft: "-2vw",
              color: "color-mix(in srgb, var(--text-primary) 20%, transparent)",
            }}
          >
            The system makes the behavior.
          </h2>
        </div>

        <Grid className="mt-12">
          {/* Asymmetric placement */}
          <GridItem span={[4, 5, 5]} start={[1, 4, 7]} className="mt-8">
            <div className="bg-bg-secondary border border-border-default p-8">
              <p className="text-heading-md font-display font-medium mb-4 leading-[1.15]">
                Asymmetric placement
              </p>
              <p className="text-body-md text-text-secondary leading-[1.6]">
                This card sits in columns 7–11, leaving deliberate negative
                space on the left. The grid creates tension through what it
                leaves empty.
              </p>
            </div>
          </GridItem>
        </Grid>
      </section>

      {/* === ACCENT USAGE DEMO === */}
      <section className="mb-32">
        <Grid>
          <GridItem span={[4, 8, 12]}>
            <p className="text-caption uppercase text-text-tertiary font-mono mb-12 tracking-[0.08em]">
              05 — Accent as Signal
            </p>
          </GridItem>

          <GridItem span={[4, 6, 8]} start={[1, 1, 1]}>
            <h2 className="text-display-md font-display font-bold mb-6 leading-[0.95] tracking-[-0.025em]">
              Every use of color is a{" "}
              <span className="text-accent">decision</span>.
            </h2>
            <p className="text-body-lg text-text-secondary mb-8 max-w-[50ch] leading-[1.6]">
              The accent appears only when something demands attention.
              Scarcity creates signal. If everything glows, nothing does.
            </p>

            <div className="flex gap-4">
              <button
                className="px-6 py-3 bg-accent text-white font-display font-medium text-body-sm cursor-pointer hover:bg-accent-hover transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Primary Action
              </button>
              <button
                className="px-6 py-3 border border-accent text-accent font-display font-medium text-body-sm cursor-pointer hover:bg-accent-muted transition-colors"
                style={{ transitionDuration: "var(--duration-base)" }}
              >
                Secondary Action
              </button>
            </div>
          </GridItem>
        </Grid>
      </section>
    </main>
  );
}
