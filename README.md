CUHackit-2025-Space-Apps-Challenge

Overview
========

This repository contains a responsive React + TypeScript website (Vite) that showcases Earth observation visualizations and narrative "treatment plans" about climate-related issues. The site combines media (images and MP4 videos), Recharts visualizations, and short narrative content driven by a data file so content is easy to update.

Highlights
----------
- Responsive hero with an autoplaying 16:9 timelapse overlay.
- Plan pages generated from a single source of truth: `src/data/plans.ts`.
- Chart rendering using Recharts with special-case media handling.
- Image gallery with lightbox support.

Tech stack
----------
- Vite
- React 18 + TypeScript
- Tailwind CSS
- Recharts
- Framer Motion (animations)
- yet-another-react-lightbox (gallery)
- sonner (toast notifications)
- @tanstack/react-query

Repository layout
---------------

Root
- `package.json`, `vite.config.ts`, `tsconfig.json`, `README.md` (this file)

src/
- `assets/` – static images and videos (e.g., `world_Temperature_Timelapse.mp4`, `CM_Map.mp4`)
- `components/` – UI components
	- `ui/` – shadcn-like UI primitives (toasts, buttons, etc.)
	- `HeroVideo.tsx` – homepage hero with background image and video overlay
	- `ChartBlock.tsx` – renders charts or media for chart cards
	- `ImageGallery.tsx` – gallery with a mapping from keys to imports
- `data/` – content data
	- `plans.ts` – main content model used by pages
- `pages/` – `Index.tsx`, `PlanDetail.tsx`, `NotFound.tsx`
- `App.tsx` – root app, router, providers

Content model
-------------

`src/data/plans.ts` defines `Plan` objects. Each plan includes fields like `id`, `slug`, `title`, `category`, `charts`, `gallery`, `datasets`, and `references`. Charts can include `data` (array of points) or `series` for multi-series charts. Gallery entries use short keys mapped in `ImageGallery.tsx`'s `imageMap` to imported assets.

Common editing tasks
--------------------
- Add or update a plan: edit `src/data/plans.ts`.
- Add assets: place files in `src/assets` and add an import + mapping in `src/components/ImageGallery.tsx`.
- Swap a chart for media: update `ChartBlock.tsx` special-case branches or change the `chart.id` in `plans.ts`.

Running locally
---------------

Install dependencies:

```powershell
npm ci
```

Start the dev server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build:

```powershell
npm run preview
```

Notes & troubleshooting
-----------------------
- Path alias `@` is defined in `vite.config.ts` and `tsconfig.json`. If imports like `@/components/...` fail, restart the dev server and clear the Vite cache (remove `node_modules/.vite`).
- Autoplay requires `muted` for most browsers. The hero video is muted on load to satisfy autoplay policies; users can unmute with controls.
- If TypeScript complains about missing React types, ensure `react` and `@types/react` are installed. Run `npm ci` or `npm i react @types/react`.

Developer tips
--------------
- Use `aspect-video` + `object-cover object-center` for consistent video overlays and background images.
- For larger datasets, consider loading chart data from external JSON files and fetching them to keep hot reload fast.

Contact
-------
If you want screenshots in this README, contributor guidelines, or automated checks, tell me which to add and I will implement them.
Email: Himanshu6748@gmail.com

