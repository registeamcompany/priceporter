# Price Reporter — "Get a GSA Schedule Contract" Landing Page

Direct-response landing page for paid Google traffic (segment: business owners 45–64,
transactional intent). Built on the Price Reporter design system (refresh theme) as a
modular Vite + Vanilla JS/CSS project — see `AI_DEVELOPMENT_GUIDE.md` for the
architecture rules.

## Versions & variants

Three pages ship from one codebase (multi-page Vite build):

**Version 1** — the original art direction (flat refresh theme):

- **Variant A — risk-led** (`/index.html`, entry `src/main.js`): problem → comparison
  table → process → quiz. Hypothesis: wins on returning / retargeting visitors.
- **Variant B — desire-led** (`/variant-b.html`, entry `src/main-b.js`): prize
  ($52B / $2.3M) → process → reassurance band → proof → "Win it / Run it / Grow it".
  Objections live only in the FAQ. Hypothesis: wins on cold first-touch ad traffic.

**Version 2** — alternative art direction, same copy as Variant A
(`/v2.html`, entry `src/main-v2.js`, body class `v2`): "modern law firm × Stripe
clean". Skewed gradient underlays in the hero, duotone federal-architecture
photography, hairline borders, layered soft shadows, pill CTAs, larger display type,
navy headings, tinted bands. Implemented as a token-level skin
(`src/styles/v2/v2.css`) over the shared blocks plus three photo-led components in
`src/components/v2/` (hero, problem, team). Photos in `public/assets/stock/` are
Unsplash placeholders — swap for brand-approved shots.

Shared between all pages: styles, scripts, design system, Header/Footer/StickyBar
and the FAQ component. Copy-bearing blocks for B live in `src/components/b/`.
`variant-b.html` and `v2.html` carry `noindex` until testing is wired up. Testing
note from the copy deck: run 50/50 on top transactional ad groups for 3–4 weeks,
primary metric CPA, secondary CR and scroll depth on the reassurance band.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the build
```

## Structure

- `index.html` — empty skeleton with mount `div`s only
- `src/main.js` — mounts components (`?raw` imports), wires styles and scripts
- `src/components/*.html` — one file per page block (Hero, TrustBar, Problem, …)
- `src/styles/*.css` — isolated CSS per block + `global.css`
- `src/scripts/*.js` — quiz, lead forms, FAQ accordion, sticky UI, exit intent, reveals
- `src/ds/` — Price Reporter design system tokens + component CSS (subset of the zip
  archive `Price Reporter Design System.zip` in the repo root)
- `public/assets/` — logo lockups, Capitol hero photo

## Design grid

- Outer rail: `.pr-container` — 1200px max, 24px gutters. Every section uses it.
- Narrow reading rail: `--lp-rail` (800px) — problem body, quiz card, FAQ, team.
  No other content widths are allowed; add new blocks on one of these two rails.
- Vertical rhythm: `.pr-section` only (112px, refresh theme). No ad-hoc paddings.
- Spacing steps come from the DS 4px scale (`--space-*`); cards use `--card-pad(-lg)`.

## Materials needed from the client (to replace CSS mocks / strengthen blocks)

1. **Vector logo (SVG/EPS).** The PNG lockups carry white antialiasing fringes on
   tinted backgrounds — the brand guide's one asset gap.
2. **Real OMS screenshot** (orders table or dashboard) — replaces the CSS mock in
   the "Orders, Catalogs & Marketplaces" card. Strongest differentiator vs consultants.
3. **Team / office working photos** (no staged group portraits, no stock) — unlocks
   the full two-column layout for the "A team, not a middleman" block.
4. **Testimonial attributions + client logo permissions** — names/companies exactly
   as published, to attach to the three quotes; logos would slot beside attribution.
5. **BBB seal artwork** — the "BBB accredited, A+" chip currently uses a generic icon.
6. **QuickBooks / Amazon logo usage confirmation** — integration tags are text-only
   until brand-use is cleared.
7. **Real service-page URLs** for the three service-card links (currently they lead
   to the form to keep one CTA per page).
8. **CRM endpoint + call-tracking number** — forms and quiz log payloads to console;
   phone number is hardcoded as 201-567-6646 everywhere.

## Wiring left for launch

- Lead forms and the quiz currently swap to a success state and log the payload to the
  console (`[lead-form]` / `[quiz]`) — connect them to the CRM there.
- Service-card links ("How we win contracts →" etc.) point at the lead form for now;
  swap in real service-page URLs if competing navigation is acceptable.
- Blog link in the "Why 2026" block points to `pricereporter.com/blog/`.
