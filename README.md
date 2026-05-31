# Chahat Jain — Personal Website

A clean, fast personal website built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** https://cj2708.github.io

## Tech

- **Astro 5** — static site, zero client JS except a tiny script for the mobile menu and scroll reveal
- **Plain CSS** — light professional theme, fully responsive
- **GitHub Actions** — auto-builds and deploys on every push to `main`

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

## Editing content

All copy lives in one place: **`src/data/content.ts`**. Edit that file to update your
summary, experience, projects, skills, education, and contact links — no HTML required.

Layout and styles:

- `src/pages/index.astro` — page structure / section order
- `src/styles/global.css` — colors, spacing, typography (theme variables at the top)
- `src/layouts/Layout.astro` — `<head>`, SEO meta, fonts

## Resume button

Set `resume` in the `site` object in `src/data/content.ts` to either:

- a **full URL** (e.g. a Google Drive link) — used as-is, or
- a **filename** you drop into `public/` (e.g. `"resume.pdf"`).

A **Resume** button then appears automatically in the hero and contact sections. Leave it
`""` to hide the button.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with the
official `withastro/action` and publishes it to GitHub Pages. Make sure Pages is set to
**Build and deployment → Source → GitHub Actions** in the repo settings (done once).
