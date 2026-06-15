# web-design

Standalone HTML design demos built around a fictional B2B distributor, **Norvik Supply Co.** (and one separate SaaS demo, Marlow). Each file is self-contained — open it directly in a browser. Images are `picsum.photos` placeholders; brand logos come from Simple Icons.

## Demos

### Standalone landing
- [marlow-landing.html](marlow-landing.html) — SaaS landing (design-taste-frontend skill)

### Norvik — three design directions, same content
| Skill / direction | Landing | Catalog |
|---|---|---|
| `design-taste-frontend` (clean, light, orange) | [norvik-supply.html](norvik-supply.html) | [norvik-catalog.html](norvik-catalog.html) |
| `frontend-design` (dark industrial spec-plate) | — | [norvik-catalog-frontend-design.html](norvik-catalog-frontend-design.html) |
| `ui-ux-pro-max` (Trust & Authority, navy/blue, Tailwind) | [norvik-uipro.html](norvik-uipro.html) | [norvik-catalog-uipro.html](norvik-catalog-uipro.html) |

### Kinetic landings (GSAP scroll choreography)
- [norvik-kinetic.html](norvik-kinetic.html) — v1, orange
- [norvik-kinetic-v2.html](norvik-kinetic-v2.html) — v2 (letter-split, magnetic buttons, cursor follower, scroll color transition), orange
- [norvik-kinetic-v2-blue.html](norvik-kinetic-v2-blue.html) — v2 recolored electric blue, with per-panel background color driven by the horizontal pan
- [norvik-kinetic-catalog.html](norvik-kinetic-catalog.html) — kinetic catalog, linked to/from the blue landing

### React project
- [jack-3d-portfolio/](jack-3d-portfolio/) — "Jack — 3D Creator" portfolio. Vite + React + TypeScript + Tailwind + Framer Motion. Run with `npm install && npm run dev`.

## Notes
- Catalog pages include live search, category filters, product detail modal, and a cart persisted in `localStorage`.
- All pages respect `prefers-reduced-motion` and target WCAG AA contrast.
- Prices and metrics are sample data for demonstration.
