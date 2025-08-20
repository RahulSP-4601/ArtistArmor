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
