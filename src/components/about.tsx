import Image from "next/image";

import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

const nowPlaying = [
  { label: "Reading", value: "Crying in H Mart by Michelle Zauner", link: "https://www.goodreads.com/en/book/show/54814676" },
  { label: "Studying", value: "Computer graphics & engine internals" },
  { label: "Listening", value: "Taylor Swift, on loop, always" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="// about"
        title="From a small town to a AAA dev floor"
        description="A Montreal transplant who came for a CS degree and stayed for the game industry."
      />

      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-violet-600/25 via-transparent to-cyan-500/25 blur-2xl" />
            <div className="relative rotate-[-2deg] rounded-xl border border-white/10 bg-white p-3 pb-4 shadow-2xl shadow-black/40 dark:bg-zinc-900">
              <Image
                src="/images/about.webp"
                alt="A polaroid of Runze Zhu"
                width={720}
                height={900}
                className="aspect-[4/5] w-64 rounded-lg object-cover sm:w-72"
              />
              <p className="mt-3 text-center font-mono text-xs text-zinc-500 dark:text-zinc-400">
                montreal, 2019 → still here 🎮
              </p>
            </div>
            <div className="absolute -right-16 -bottom-10 hidden rotate-3 rounded-xl border border-white/10 bg-white p-2 pb-3 shadow-2xl shadow-black/40 sm:block dark:bg-zinc-900">
              <Image
                src="/images/rootin4ya-team.webp"
                alt="The Rootin' 4 Ya! team photo from Global Game Jam 2023"
                width={640}
                height={480}
                className="aspect-[4/3] w-40 rounded-lg object-cover"
              />
              <p className="mt-2 text-center font-mono text-[10px] text-zinc-500 dark:text-zinc-400">GGJ 2023 crew</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                I was born and raised in a small town in China and moved to Montreal in 2019 with one goal: to make
                video games. Four years later I walked out of Concordia University with a CS degree, a Dean’s List
                citation, and a much longer shelf of unfinished games than I’d like to admit.
              </p>
              <p>
                Since then I’ve built minigames in Unreal Engine 5 at Le Catnip Collective, survived an eight-month
                internship at EA Motive, and learned more from game jams than most of my coursework. My comfort zone is
                gameplay and UI programming — my curiosity lives in graphics, engines, and anything that makes a
                controller vibrate at the right moment.
              </p>
              <p>
                Outside of code: I’m a Swiftie, a recovering vinyl collector, a semi-retired guitarist, and a firm
                believer that going to live shows is a valid personality trait.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/60 backdrop-blur dark:bg-white/[0.03]">
              <div className="border-b border-white/5 bg-white/40 px-5 py-3 font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase dark:bg-white/[0.04] dark:text-zinc-400">
                $ now --right-now
              </div>
              <ul className="divide-y divide-white/5">
                {nowPlaying.map((item) => (
                  <li key={item.label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="w-24 shrink-0 font-mono text-xs tracking-wide text-violet-500 uppercase dark:text-violet-400">
                      {item.label}
                    </span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-zinc-700 transition hover:text-violet-500 dark:text-zinc-300 dark:hover:text-violet-300"
                      >
                        {item.value} ↗
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
