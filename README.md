# portfolio-fortz

Personal portfolio —

**Repository:** [https://github.com/FranzFortz/portfolio-fortz](https://github.com/FranzFortz/portfolio-fortz)

## Getting started

1. Copy environment template (optional for local dev):

   ```bash
   copy .env.example .env.local
   ```

2. Install dependencies and run the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000). Health check: [http://localhost:3000/api/health](http://localhost:3000/api/health).

## Project layout

| Area | Purpose |
|------|---------|
| `src/app/` | Routes and layouts (minimal until the frontend phase). |
| `src/features/` | Projects, skills, experience, social links, contact config — types, static data, server-safe getters. |
| `src/shared/` | Shared utilities (e.g. `cn` for class names). |
| `src/site.config.ts` | Site name, description, base URL. |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint
