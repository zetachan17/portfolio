"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks, resumeHref } from "@/lib/data";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/5 bg-white/70 backdrop-blur-xl dark:bg-[#06050d]/70"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-7 place-items-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-400 text-[11px] font-bold text-white shadow-lg shadow-emerald-500/25">
            RZ
          </span>
          <span>
            rzhu<span className="text-emerald-500 dark:text-emerald-400">.ca</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-zinc-600 transition hover:bg-white/10 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-300"
          >
            Resume
          </a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-700 dark:text-zinc-200"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/5 bg-white/95 px-5 pt-2 pb-5 backdrop-blur-xl md:hidden dark:bg-[#06050d]/95">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-white/10 dark:text-zinc-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-center text-sm font-medium text-emerald-600 dark:text-emerald-300"
            >
              View Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
