# Ahmed Hassan Sayed — Web Developer Portfolio

A frontend-only React + Vite portfolio website positioning Ahmed as a
Web Developer / Frontend Developer, with Data Analysis / AI / Embedded /
Networking kept as secondary technical interests.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The production files are written to `dist/` — upload that folder to any
static host (Netlify, Vercel, GitHub Pages, etc.).

## What's inside

- `src/pages` — Dashboard, About, Projects, Skills, Services, CV,
  Certificates, Timeline, Blog, Contact
- `src/components` — Sidebar, Topbar, Footer, Loader, CommandPalette
  (Ctrl+K), ProjectCard/ProjectModal, CustomCursor, ScrollProgress
- `src/data` — editable content: projects, skills, services,
  certificates, timeline, blog placeholders
- `src/context/ThemeContext.jsx` — light/dark mode with localStorage

## Editing your info

- Personal details, email and LinkedIn: search for
  `ghghghb083@gmail.com` and the LinkedIn URL across `src/pages`.
- Projects: edit `src/data/projects.js`. Only the two verified
  projects (Real Estate Analytics System, Personal Portfolio Website)
  are included — add real ones here as you build them, with real
  `liveUrl` / `sourceUrl` links once you have them.
- Certificates: `src/data/certificates.js` is empty on purpose (no
  certificates were verified) — add entries as
  `{ name, issuer, date, status }` and the Certificates page will
  render them automatically instead of the "coming soon" state.

## Notes

- No backend: the Contact form validates input and opens a `mailto:`
  link — there's no real email-sending service.
- The custom cursor is disabled automatically on touch devices.
- Print the CV page (`/cv`) or use the command palette's "Print CV"
  action to save it as a PDF.
"# ahmed-webportfolio" 
"# ahmed-webportfolio" 
"# ahmed-webportfolio" 
