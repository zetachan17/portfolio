# rzhu.ca — Game Developer Portfolio

A modern, dark-themed portfolio for Runze Zhu, built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, with Motion-powered animations and a light/dark theme toggle.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
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

## Deploy to Vercel

1. Push this folder to a GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin git@github.com:zetachan17/<repo-name>.git
   git push -u origin main
   ```

   (Or replace the contents of your existing `zetachan17/zetachan17.github.io` repo.)

2. In Vercel: **Add New → Project → Import** the repository.
3. Vercel auto-detects Next.js — no framework or build settings are required.
4. Optional: add `NEXT_PUBLIC_SITE_URL` under Project → Settings → Environment Variables.
5. Deploy. You can also point a custom domain (like `runze.dev`) at the deployment in Vercel's Domains tab.

## Stack

- Next.js 16 (App Router, Turbopack, static export-ready)
- TypeScript
- Tailwind CSS v4
- Motion (animations)
- next-themes (dark/light mode)
- lucide-react + inline brand icons
