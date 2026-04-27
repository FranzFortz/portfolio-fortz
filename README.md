# portfolio-fortz

Personal portfolio — [Next.js](https://nextjs.org) (App Router) with a **feature-first** data layer under `src/features` and a URL-based marketing shell under `src/app/(site)`.

**Repository:** [https://github.com/FranzFortz/portfolio-fortz](https://github.com/FranzFortz/portfolio-fortz)

## Getting started

1. Copy environment template (set production URL for correct OG/sitemap URLs):

   ```bash
   copy .env.example .env.local
   ```

2. Install dependencies and run the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000). Health check: [http://localhost:3000/api/health](http://localhost:3000/api/health).

## Routes

| Path | Content |
|------|---------|
| `/` | Home |
| `/about` | About |
| `/skills` | Skills (from `src/features/skills`) |
| `/projects` | Projects (from `src/features/projects`) |
| `/contact` | Contact form + config |

SEO: `sitemap.xml` and `robots.txt` are generated from [`src/app/sitemap.ts`](src/app/sitemap.ts) and [`src/app/robots.ts`](src/app/robots.ts).

## Project layout

| Area | Purpose |
|------|---------|
| `src/app/(site)/` | Marketing layout, dropdown nav, motion template, section pages |
| `src/app/api/` | Route handlers (e.g. health) |
| `src/features/` | Domain data, getters, contact schema/actions |
| `src/shared/` | UI primitives, `cn`, theme, SEO helpers |
| `src/site.config.ts` | Site name, description, base URL |

## Main dependencies

- **UI:** Tailwind CSS v4, `class-variance-authority`, `@radix-ui/react-slot`, `@radix-ui/react-dropdown-menu`, `lucide-react`, `framer-motion`
- **Forms:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **Theme:** `next-themes`

Design tokens (accent, neutrals, soft shadow) live in [`src/app/globals.css`](src/app/globals.css). Display headings use **Source Serif 4**; UI/body uses **Geist Sans** ([`src/app/layout.tsx`](src/app/layout.tsx)).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint
