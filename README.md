# Price Reporter — "Get a GSA Schedule Contract" Landing Page

Direct-response landing page for paid Google traffic (segment: business owners 45–64,
transactional intent). Built on the Price Reporter design system (refresh theme) as a
modular Vite + Vanilla JS/CSS project — see `AI_DEVELOPMENT_GUIDE.md` for the
architecture rules.

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

## Wiring left for launch

- Lead forms and the quiz currently swap to a success state and log the payload to the
  console (`[lead-form]` / `[quiz]`) — connect them to the CRM there.
- Service-card links ("How we win contracts →" etc.) point at the lead form for now;
  swap in real service-page URLs if competing navigation is acceptable.
- Blog link in the "Why 2026" block points to `pricereporter.com/blog/`.
