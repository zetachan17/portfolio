export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Runze Zhu · game programmer
        </p>
        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
          built with next.js + tailwind · game dev by day, vinyl by night
        </p>
      </div>
    </footer>
  );
}
