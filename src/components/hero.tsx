import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

import { resumeHref } from "@/lib/data";

import { Reveal } from "./reveal";
import { SocialLinks } from "./social-icons";

const terminalLines = [
  { prompt: "whoami", output: "generalist programmer" },
  { prompt: "cat engines.txt", output: "ue5 · anvil · unity · frostbite" },
  { prompt: "./status --now", output: "generalist programmer @ ubisoft montreal" },
];

const statChips = ["Ubisoft Montreal", "Warzone Mobile launch", "Concordia CS '23", "GGJ 2023"];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16 pb-20">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Currently: Generalist Programmer · Ubisoft Montreal
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white">
              Runze Zhu
              <span className="block bg-linear-to-r from-emerald-500 via-lime-500 to-teal-400 bg-clip-text text-transparent">
                makes games feel good.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I’m a Montreal-based game programmer currently working on Assassin’s Creed Hexe at Ubisoft Montreal.
              Before that I helped launch Call of Duty: Warzone Mobile at Beenox, built Jumpin’ Jazz Cats at Le Catnip
              Collective, and interned at EA Motive on the Iron Man title. I love gameplay and UI programming, and I’m
              always poking at graphics and engine internals.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="rounded-full bg-linear-to-r from-emerald-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-xl hover:shadow-teal-500/30 hover:brightness-110"
              >
                View projects
              </Link>
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-white/25 hover:bg-white/10 dark:text-zinc-200"
              >
                <Download className="size-4" />
                Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10">
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-2">
              {statChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-linear-to-br from-emerald-600/20 via-transparent to-teal-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0915]/90 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-amber-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-zinc-500">runze@dev: ~/portfolio</span>
              </div>
              <div className="space-y-4 p-6 font-mono text-sm leading-7">
                {terminalLines.map((line) => (
                  <div key={line.prompt}>
                    <p>
                      <span className="text-emerald-400">➜</span>{" "}
                      <span className="text-emerald-400">~/portfolio</span>{" "}
                      <span className="text-zinc-200">{line.prompt}</span>
                    </p>
                    <p className="text-zinc-400">{line.output}</p>
                  </div>
                ))}
                <p>
                  <span className="text-emerald-400">➜</span> <span className="text-emerald-400">~/portfolio</span>{" "}
                  <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-teal-400" />
                </p>
                <div className="mt-2 border-t border-white/5 pt-4 text-xs text-zinc-500">
                  <p>
                    <span className="text-teal-400">#</span> fun fact: swiftie since day one
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-400 transition hover:text-emerald-400 md:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
