import { ArrowUpRight, Download, Mail } from "lucide-react";

import { resumeHref } from "@/lib/data";

import { Reveal } from "./reveal";
import { Section } from "./section";
import { SocialLinks } from "./social-icons";

export function Contact() {
  return (
    <Section id="contact" className="pb-28 text-center sm:pb-36">
      <Reveal>
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.25em] text-violet-500 uppercase dark:text-violet-400">
            {"// contact"}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Let’s make something players{" "}
            <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              can’t put down.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I’m open to gameplay, UI, and tools programming roles — or just a good conversation about why “one more
            turn” is a lie. Email me, or find me wherever games people hang out.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:zetachan17@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:shadow-xl hover:shadow-cyan-500/30 hover:brightness-110"
            >
              <Mail className="size-4" />
              zetachan17@gmail.com
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-700 transition hover:border-white/25 hover:bg-white/10 dark:text-zinc-200"
            >
              <Download className="size-4" />
              Download resume
              <ArrowUpRight className="size-3.5 opacity-60" />
            </a>
          </div>

          <SocialLinks className="mt-9 justify-center" />
        </div>
      </Reveal>
    </Section>
  );
}
