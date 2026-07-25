# Aayush Arya — Developer Portfolio

A premium, animation-rich developer portfolio built with React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Three Fiber. Dark-mode-first, glassmorphic, and built for a 95+ Lighthouse score.

**Sections:** Hero · About · Skills · Projects · Experience · Certifications · Achievements · Resume · Contact

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Animation | Framer Motion (scroll reveals, layout transitions, springs), GSAP (`quickTo` cursor smoothing) |
| Smooth scroll | Lenis |
| 3D / background | React Three Fiber + three.js (lazy-loaded particle field) |
| Icons | lucide-react + react-icons (brand logos) |
| Contact form | EmailJS (`@emailjs/browser`) |

## Features

- Custom cursor, scroll progress bar, animated loading screen
- Aurora gradient + starfield particle background on the hero
- Typing/rotating role text, magnetic buttons, glow-border cards, spotlight hover
- Command palette (`Ctrl/Cmd + K`) for quick navigation and actions
- Scroll-triggered reveal, blur, and stagger animations throughout
- Interactive skills tabs with animated progress bars
- Project cards with an expandable details modal
- Flip-card certifications, animated timelines for experience/achievements
- Animated counters, resume preview + download, EmailJS-powered contact form
- Fully responsive (mobile, tablet, desktop, ultra-wide), SEO meta tags + JSON-LD, sitemap/robots

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

### Environment variables (contact form)

The contact form sends mail via [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env` and fill in your own service/template/public key (create a free EmailJS account, an email service, and a template with `user_name`, `user_email`, `subject`, `message` fields):

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Without these set, the form shows a friendly error instead of silently failing.

### Scripts

```bash
npm run dev       # start dev server
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer, Layout, ScrollProgress
│   ├── sections/     Hero, About, Skills, Projects, Experience,
│   │                 Certifications, Achievements, Resume, Contact
│   ├── shared/       CustomCursor, LoadingScreen, CommandPalette,
│   │                 MagneticButton, GlowCard, RevealText, SectionHeading,
│   │                 AnimatedCounter, AuroraBackground
│   ├── three/        ParticleField (lazy-loaded R3F canvas)
│   └── ui/           Badge, Modal
├── data/profile.ts   All site content (name, skills, projects, experience,
│                     certifications, achievements) — edit this file to
│                     customize the whole site
├── hooks/            useLenis, useTypewriter, useCountUp, useActiveSection,
│                     useMediaQuery
├── lib/utils.ts      cn() class-merge helper
└── index.css         Tailwind v4 theme tokens + global styles
```

## Customizing content

Almost everything on the site is data-driven from **`src/data/profile.ts`**. Update the `profile`, `education`, `journey`, `skillCategories`, `projects`, `experience`, `certifications`, and `achievements` exports to change the content without touching any component.

To replace the résumé, drop your PDF at `public/resume/Aayush_Arya_Resume.pdf` (or update `profile.resumeUrl`).

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new) — it auto-detects Vite via `vercel.json`.
3. Add the three `VITE_EMAILJS_*` environment variables in the Vercel project settings.
4. Deploy. `vercel.json` already configures the SPA rewrite and long-cache headers for hashed assets.

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

## Performance & SEO notes

- The Three.js particle field is code-split and lazy-loaded so it never blocks first paint.
- `index.html` ships full meta tags, Open Graph/Twitter cards, a `Person` JSON-LD block, `robots.txt`, and `sitemap.xml`.
- Respect for `prefers-reduced-motion` disables the smooth-scroll (Lenis) instance.
- Update the canonical domain in `index.html`, `public/robots.txt`, and `public/sitemap.xml` before going live.

## License

MIT — built as a personal portfolio project.
