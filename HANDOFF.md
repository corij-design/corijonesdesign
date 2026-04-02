# Context Handoff Brief — corijonesdesign.com

**Project:** corijonesdesign.com — personal portfolio site for Cori Jones (VP of Product Design)

**Stack:** Next.js 16.2.0 (App Router, Turbopack) / React 19.2.4 / TypeScript / Tailwind CSS v4 / Framer Motion 12.38.0 / Google Fonts via `<link>` tags (not `next/font/google`)

**Current state of the build:**
Phases 1–3 are complete. The site has a working dark/light theme, a 12-column responsive grid system (4 mobile / 8 tablet / 12 desktop), a choreographed hero entrance with mega typography, scroll-driven section transitions (TypeBleed, TypeWeight, TypeReveal, TypeHighlight), section breaks with drifting text, a fullscreen overlay navigation with spatial grid layout (desktop) and stacked list (mobile), route structure with placeholder pages for all five sections, a clickable scroll-aware section marker, and keyboard accessibility. The landing page includes Work preview (3 cards), Thinking preview (essay list), Contact section, and a footer bleed. All content is placeholder — no real case studies or essays yet.

**Last task completed:**
Removed the redundant close button (X) from inside the NavOverlay component. The NavTrigger (fixed at `top-6 right-20 z-[101]`) already morphs into an X when the nav is open, so it serves as the sole close mechanism.

**Key decisions made this session:**

- **Tailwind v4 (not v3):** No `tailwind.config.ts`. All config lives in `globals.css` using `@theme inline` for color/font mappings and `@utility` blocks for the type scale. The `clamp()` values don't work as `--font-size-*` theme variables in v4, so each size is an explicit `@utility` block (e.g., `@utility text-hero-name { font-size: clamp(4rem, 10vw, 12rem); }`).
- **Google Fonts via `<link>` tags** in `layout.tsx` `<head>` — `next/font/google` fails in sandboxed builds with no network access. Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono).
- **Custom ThemeProvider** (not `next-themes`) — manages `data-theme` attribute on `<html>`, persists to localStorage.
- **GridItem uses inline styles** for `gridColumn` to avoid Tailwind JIT dynamic class issue.
- **TypeScript ease typing:** Framer Motion ease arrays typed as `const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]`.
- **PageTransition** lives per-page on sub-routes (not in layout.tsx). Using `key={pathname}` in layout caused an infinite re-render loop that crashed the tab.
- **All positioned elements** (hero grid lines, accent plumb line, content) are constrained within `max-w-[1536px] mx-auto` to prevent layout drift on ultrawide viewports.
- **Section numbering:** 01 Work, 02 Thinking, 03 Workshop, 04 Diagnostic, 05 About, 06 Connect. Hero has no number.
- **Section marker** is fixed to the left edge of the viewport (`left-6`), NOT inside the grid. It uses IntersectionObserver with `rootMargin: "-50% 0px -50% 0px"` to detect active section.

**Active file paths / component names to know:**

```
src/app/globals.css              — Design tokens, @theme inline, @utility type scale, responsive grid breakpoints
src/app/layout.tsx               — Root layout, font <link> tags, ThemeProvider + NavProvider wrapping
src/app/page.tsx                 — Landing page (Hero, SectionBreaks, Work/Thinking/Contact sections, footer bleed)
src/components/sections/hero.tsx — Choreographed 2.5s entrance, accent plumb line, scroll indicator, constrained layout
src/components/sections/section-break.tsx — TypeBleed mega word + next section label
src/components/navigation/nav-overlay.tsx — Fullscreen nav, spatial grid desktop layout, items 01–05
src/components/navigation/nav-trigger.tsx — Fixed top-right, "Menu" label + icon morphing to X
src/components/navigation/nav-provider.tsx — Open/close state, scroll lock, Escape key, focus return, route-change auto-close
src/components/motion/page-transition.tsx — Simple opacity+y mount animation, used per sub-page
src/components/motion/scroll-reveal.tsx — Viewport-triggered fade+lift using useInView
src/components/typography/type-bleed.tsx — Giant text bleeding past viewport, horizontal scroll shift
src/components/typography/type-weight.tsx — Font-weight morphs 300→700 on scroll (Space Grotesk variable)
src/components/typography/type-highlight.tsx — (exists, defined in Phase 2)
src/components/typography/type-reveal.tsx — (exists, defined in Phase 2)
src/components/grid/grid.tsx     — Grid component + GridOverlay (dev toggle), max-w-[1536px]
src/components/grid/grid-item.tsx — Inline gridColumn styles
src/components/ui/section-marker.tsx — Fixed left-edge, scroll-aware, crossfade, clickable, home-page only
src/components/ui/theme-toggle.tsx — Fixed top-right, sun/moon icons, Framer Motion rotation
src/components/theme-provider.tsx — Custom dark/light theme context, data-theme on <html>
src/lib/fonts.ts                 — Google Fonts link config
```

**Placeholder pages** (all wrap content in `<PageTransition>`):
```
src/app/work/page.tsx            — 01 Work
src/app/work/[slug]/page.tsx     — Work case study detail
src/app/thinking/page.tsx        — 02 Thinking
src/app/thinking/[slug]/page.tsx — Thinking essay detail
src/app/workshop/page.tsx        — 03 Workshop
src/app/workshop/[slug]/page.tsx — Workshop detail
src/app/diagnostic/page.tsx      — 04 Diagnostic
src/app/about/page.tsx           — 05 About
```

**Open questions / known issues:**

- **lightningcss platform mismatch:** `node_modules` installed in Linux sandbox won't work on macOS ARM. User needs to run `rm -rf node_modules .next package-lock.json && npm install` locally after pulling changes.
- No real content yet — all case studies, essays, and bio text are placeholder.
- No Phase 4 spec has been discussed (presumably: real content, case study pages, detail pages, responsive polish).
- The Diagnostic page concept (interactive coherence self-assessment tool) has been mentioned but not designed or built.

**Exact next step:**
Phase 3 is complete. Ask Cori what she wants to tackle next — likely Phase 4 content buildout (real case study data, essay content, about page bio, detail page templates) or any visual polish/refinement she wants to address first. There are no unfinished tasks from the current session.
