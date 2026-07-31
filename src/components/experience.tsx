import { experience } from "@/lib/data";

import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="// experience"
        title="Where I've shipped, broken, and fixed things"
        description="A timeline of studios, internships, and the degree that started it all."
      />

      <div className="relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-linear-to-b before:from-violet-500/60 before:via-cyan-500/40 before:to-transparent sm:before:left-[9px]">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
            <div className="relative pl-10 sm:pl-12">
              <span className="absolute top-1.5 left-0 size-4 rounded-full border-2 border-violet-500 bg-[#0b0a14] shadow-[0_0_12px_rgba(139,92,246,0.6)] dark:bg-[#06050d]" />
              <div className="group rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur transition hover:border-violet-500/30 hover:bg-white/80 sm:p-7 dark:bg-white/[0.03] dark:hover:bg-white/[0.05]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">{item.company}</h3>
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {item.period} · {item.location}
                  </p>
                </div>
                <p className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-300">{item.role}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="mt-0.5 text-cyan-500">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-500 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
