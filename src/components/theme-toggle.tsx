"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-white/25 hover:text-white dark:text-zinc-300 dark:hover:text-white"
    >
      {mounted && resolvedTheme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
