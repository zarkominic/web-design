# Jack — 3D Creator portfolio

A 3D creator portfolio landing page built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React**, reproducing a motionsites.ai spec.

## Run

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run preview  # preview the build
```

## Sections
1. **Hero** — navbar, massive gradient heading, mouse-magnetic portrait
2. **Marquee** — two rows of GIFs that scroll with page scroll
3. **About** — corner 3D objects + character-by-character scroll text
4. **Services** — 01–05 list on a white panel
5. **Projects** — sticky-stacking, scaling project cards

## Components
`FadeIn`, `Magnet`, `AnimatedText`, `ContactButton`, `LiveProjectButton`

## Notes
- Theme `#0C0C0C`, font **Kanit** (Google Fonts), gradient `.hero-heading`.
- Images are hotlinked from the original spec (figma.site / motionsites.ai / higgs.ai CloudFront). They are third-party assets and may change or rate-limit; swap them with your own for a real deployment.
