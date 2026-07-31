import { skillGroups } from "@/lib/data";

import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="// skills"
        title="Tools in the toolbox"
        description="The languages, engines, and systems I reach for when a game needs to feel right."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur transition hover:border-teal-500/30 dark:bg-white/[0.03]">
              <h3 className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase dark:text-zinc-400">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-700 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
