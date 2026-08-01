# rzhu.ca — Game Developer Portfolio

A modern, dark-themed portfolio for Runze Zhu, built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, with Motion-powered animations and a light/dark theme toggle.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # exports a fully static site to ./out
pnpm start      # serves ./out locally via `serve`
pnpm lint       # eslint
```

> Don't have pnpm? Use npm instead — the same scripts work:
>
> ```bash
> npm install
> npm run dev
> npm run build
> npm run start
> npm run lint
> ```
>
> Or install pnpm globally with `npm install -g pnpm`. If pnpm blocks `sharp`/`unrs-resolver` build scripts on a fresh install, they're already approved in `pnpm-workspace.yaml`.

## Where things live

| What | Where |
| --- | --- |
| Projects, experience, skills, socials | [`src/lib/data.ts`](src/lib/data.ts) — all site content in one typed file |
| Page sections | [`src/components/`](src/components/) — hero, about, experience, projects, skills, contact |
| Global styles & theme tokens | [`src/app/globals.css`](src/app/globals.css) |
| Metadata, fonts, OG image | [`src/app/layout.tsx`](src/app/layout.tsx), [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) |
| Project artwork | [`public/images/`](public/images/) (optimized WebP) |
| Resume | [`public/Runze_Zhu_Resume.pdf`](public/Runze_Zhu_Resume.pdf) — replace with an updated version |

## Customization checklist

- **Content**: edit `src/lib/data.ts` — every project card, job, skill, and social link is driven by it.
- **Resume**: drop a new PDF over `public/Runze_Zhu_Resume.pdf`.
- **Dates**: job history and dates come from the current resume — update `src/lib/data.ts` whenever it changes.
- **Site URL**: defaults to `https://rzhu.ca`. To override (e.g. for preview deployments), set `NEXT_PUBLIC_SITE_URL`.
- **Artwork**: re-run the optimizer with any source folder containing the original files:

```bash
node scripts/optimize-images.mjs /path/to/original-images
```

It converts and resizes to WebP in `public/images/`.

## Deploy to GitHub Pages

The project builds to a fully static `out/` folder (`output: "export"`), so it runs on GitHub Pages with no server. A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes it automatically on every push to `main`.

1. **Enable Pages**: in the repo → Settings → Pages, set Source to **GitHub Actions** (don't pick a branch — the workflow deploys the artifact).
2. **Push**: any commit to `main` triggers the workflow. The site appears at `https://zetachan17.github.io/portfolio/` once the first run finishes.
3. **Custom domain**: add `rzhu.ca` in Settings → Pages → Custom domain. The repo already contains a `CNAME` file for it.
4. **Cloudflare DNS**: in the `rzhu.ca` zone, add a `CNAME` record for `@` (and optionally `www`) targeting `zetachan17.github.io`. DNS-only (grey cloud) is simplest; if you proxy through Cloudflare, set SSL/TLS mode to **Full (strict)**.

Hosting under a subpath instead? Set `NEXT_PUBLIC_BASE_PATH=/portfolio` when building (or edit the workflow) so asset URLs get the prefix.

## Alternative: Vercel

The repo also still deploys to Vercel as-is — import it there and it works the same (Vercel treats the static export as plain static files).

## Stack

- Next.js 16 (App Router, Turbopack, static export-ready)
- TypeScript
- Tailwind CSS v4
- Motion (animations)
- next-themes (dark/light mode)
- lucide-react + inline brand icons
