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
    default: "Runze Zhu — Gameplay Programmer",
    template: "%s — Runze Zhu",
  },
  description:
    "Runze Zhu is a Montreal-based game developer specializing in gameplay and UI programming. Worked on Jumpin' Jazz Cats (Le Catnip Collective / Team17) and interned at EA Motive on the Iron Man title.",
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
    title: "Runze Zhu — Gameplay Programmer",
    description:
      "Montreal-based gameplay & UI programmer. Jumpin' Jazz Cats · EA Motive · Ubisoft Game Lab 2022 nominee.",
    type: "website",
    locale: "en_US",
    siteName: "runze.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runze Zhu — Gameplay Programmer",
    description:
      "Montreal-based gameplay & UI programmer. Jumpin' Jazz Cats · EA Motive · Ubisoft Game Lab 2022 nominee.",
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
            <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px] dark:bg-violet-600/25" />
            <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/20" />
            <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[120px] dark:bg-fuchsia-600/20" />
          </div>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
