import type { Metadata } from "next";
import { fontLinks } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { NavProvider } from "@/components/navigation/nav-provider";
import { SiteLogo } from "@/components/ui/site-logo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cori Jones — Product Design Leadership",
  description:
    "VP of Product Design. I build the systems that let great teams do great work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {fontLinks.map((link, i) => (
          <link key={i} {...link} />
        ))}
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <ThemeProvider>
          <NavProvider>
            <SiteLogo />
            {children}
          </NavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
