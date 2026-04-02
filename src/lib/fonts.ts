// Font configuration
// Fonts are loaded via <link> tags in layout.tsx head
// CSS variables are set in globals.css @font-face / @theme

export const fontLinks = [
  {
    rel: "preconnect" as const,
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect" as const,
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous" as const,
  },
  {
    rel: "stylesheet" as const,
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap",
  },
];
