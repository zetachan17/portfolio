"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { projectCategories, projects, type Project, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

import { Section, SectionHeading } from "./section";

const categoryLabels: Record<ProjectCategory, string> = {
  studio: "Studio",
  competition: "Competition",
  "game-jam": "Game Jam",
  school: "School",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 dark:bg-white/[0.03]"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn("relative flex h-full w-full items-center justify-center bg-linear-to-br", project.gradient)}>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <span className="relative font-display text-6xl font-bold tracking-tight text-white/95 drop-shadow-lg">
              {project.glyph}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/10" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur">
            {categoryLabels[project.category]}
          </span>
          {project.year ? (
            <span className="rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
              {project.year}
            </span>
          ) : null}
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/80 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur">
              <Sparkles className="size-3" />
              Featured
            </span>
          ) : null}
        </div>

        <div className="absolute right-4 bottom-3 left-4">
          <h3 className="font-display text-xl font-bold text-white drop-shadow">{project.title}</h3>
          <p className="mt-0.5 text-xs font-medium tracking-wide text-white/80">{project.role}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] text-cyan-700 dark:text-cyan-300">
            {project.engine}
          </span>
          {project.highlights.slice(0, 2).map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-500 dark:text-zinc-400"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-5">
          {project.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 transition hover:text-cyan-500 dark:text-violet-300 dark:hover:text-cyan-300"
            >
              {link.label}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const filtered = active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="// projects"
        title="Things I've made (and some I'm proud of)"
        description="From shipped studio games to 48-hour jam experiments — here's what happens when I get my hands on a build."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((category) => {
          const count =
            category.id === "all" ? projects.length : projects.filter((p) => p.category === category.id).length;
          const isActive = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "border-transparent bg-linear-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25"
                  : "border-white/10 bg-white/5 text-zinc-600 hover:border-violet-500/40 hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-300",
              )}
            >
              {category.label}
              <span className={cn("ml-1.5 font-mono text-xs", isActive ? "text-white/70" : "text-zinc-400")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
