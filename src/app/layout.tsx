import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Runze Zhu — Game Programmer",
    template: "%s — Runze Zhu",
  },
  description:
    "Runze Zhu is a Montreal-based game programmer at Ubisoft Montreal working on Assassin's Creed Hexe. Previously: Call of Duty: Warzone Mobile (Beenox), Jumpin' Jazz Cats (Le Catnip Collective), and Iron Man (EA Motive).",
  keywords: [
    "Runze Zhu",
    "game developer",
    "gameplay programmer",
    "UI programmer",
    "Unreal Engine",
    "Unity",
    "Montreal",
    "portfolio",
  ],
  authors: [{ name: "Runze Zhu", url: "https://github.com/zetachan17" }],
  openGraph: {
    title: "Runze Zhu — Game Programmer",
    description:
      "Generalist programmer at Ubisoft Montreal · Assassin's Creed Hexe · Warzone Mobile · Jumpin' Jazz Cats.",
    type: "website",
    locale: "en_US",
    siteName: "runze.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runze Zhu — Game Programmer",
    description:
      "Generalist programmer at Ubisoft Montreal · Assassin's Creed Hexe · Warzone Mobile · Jumpin' Jazz Cats.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-svh font-sans">
        <ThemeProvider>
          <div aria-hidden="true" className="bg-grid pointer-events-none fixed inset-0 -z-10" />
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-600/15 blur-[120px] dark:bg-emerald-600/25" />
            <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px] dark:bg-teal-500/20" />
            <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-600/10 blur-[120px] dark:bg-lime-600/20" />
          </div>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
