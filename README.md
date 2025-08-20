# Artist Armor — Secure Creative Marketplace (Landing Page)

A fast, modern landing page for **Artist Armor** — a concept platform that helps creators **showcase, sell, and protect** their work.
Built with **React + Vite** and clean CSS, featuring scroll-reveal animations, counters, and a fully responsive layout.

> Tagline: **A Fortress for Your Talent**

---

## ✨ Features

- Modern hero with soft-glow background and animated badge
- “Pain points”, **Features**, Stats with CountUp, Before/After, How-it-Works, Testimonials, FAQ, and CTA
- **IntersectionObserver** scroll-reveal animations (no heavy animation libs)
- **Responsive** grid system (mobile → desktop)
- Accessible links, focus states, and semantic structure

---

## 🧱 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** CSS with custom variables (`styles/variables.css`)
- **Icons:** `react-icons` (Feather icons set `Fi*`)
- **Animations:** `IntersectionObserver` + small `CountUp` helper

---

## ▶️ Run Locally

### Prerequisites

- **Node.js 18+** (20+ recommended)
- **npm** (or yarn/pnpm)

### Setup & Dev

```bash
# 1) clone
git clone https://github.com/RahulSP-4601/ArtistArmor.git
cd ArtistArmor

# 2) install deps
npm install

# 3) start dev server
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Hot reload is enabled.

### Build & Preview (production)

```bash
npm run build      # outputs to /dist
npm run preview    # serves the built app locally
```

---

## ⚙️ Configuration

- **Branding & copy:** Edit content in `src/pages/Home.jsx`.
- **Colors/spacing/shadows:** `src/styles/variables.css`.
- **Footer links & socials:** `src/components/Footer.jsx`.
- **Icons:** Replace any `Fi*` icons from `react-icons/fi`.

---

## 🚀 Deploy (GitHub Pages)

If hosted at `https://<USER>.github.io/<REPO>/`, set Vite’s base path:

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/<REPO>/", // remove this line if deploying to <USER>.github.io root
});
```

Ensure SPA routing works by copying `index.html` → `404.html` after build:

```json
// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "postbuild": "cp dist/index.html dist/404.html || copy distindex.html dist\404.html",
    "preview": "vite preview"
  }
}
```

### Option A — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: mkdir build_out && cp -r dist/* build_out/ && cp build_out/index.html build_out/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build_out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option B — `gh-pages` (quick)

```bash
npm i -D gh-pages
```

```json
// package.json
{
  "homepage": "https://<USER>.github.io/<REPO>/",
  "scripts": {
    "predeploy": "vite build && cp dist/index.html dist/404.html || copy distindex.html dist\404.html",
    "deploy": "gh-pages -d dist"
  }
}
```

Then:

```bash
npm run deploy
```

---

## 🩹 Troubleshooting

- **Tiles/cards not visible:** If a component has class `reveal` but isn’t wrapped in `<Reveal>…</Reveal>` (or never receives `.is-visible`), it will remain `opacity: 0`. Wrap each tile in `Reveal` or remove the `reveal` class inside the tile.
- **Centered checklist:** Use the centered grid CSS (fixed track widths + `justify-content: center`) so the checklist stays centered on both desktop and mobile.
- **Broken deep links on GitHub Pages:** Ensure `dist/404.html` is created (SPA fallback) as shown in `postbuild`.

---

## 🤝 Contributing

PRs are welcome for UI polish, accessibility, and performance improvements.
Run `npm run build` before submitting to ensure there are no build errors.

---

## 📄 License

MIT © 2025 Artist Armor
