import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12 max-w-2xl sm:mb-16", align === "center" && "mx-auto text-center")}>
      <p className="mb-3 font-mono text-xs font-medium tracking-[0.25em] text-emerald-500 uppercase dark:text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">{description}</p> : null}
    </div>
  );
}
