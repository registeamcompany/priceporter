# Price Reporter — Design System

GSA contract services. **pricereporter.com**, founded 2006, Saddle Brook / New York area. Price Reporter helps commercial businesses win a GSA Multiple Award Schedule (MAS) contract and then keeps it alive: proposal and negotiation, contract management and modifications, catalog uploads to GSA Advantage over EDI, order-life-cycle automation (their OMS), FedMall/DLA, and federal market intelligence.

Audience: owners and contract managers at small-to-mid-size US suppliers and resellers who are considering or already hold a GSA Schedule. The brand voice is **specialist, plain-spoken, credential-heavy** — a compliance-driven, high-consideration B2G purchase.

Published proof points (use these, don't invent others): 20+ years working with GSA · 400+ GSA contracts awarded · 1000+ companies served · 1500+ contracts under management · 20K+ contract modifications completed · 2.5M+ GSA orders processed · 4.9★ customer rating · BBB accredited, A+ rating · phone 201.567.6646 · salesteam@pricereporter.com.

## Sources used to build this system

| Source | What it gave us |
|---|---|
| `uploads/price reporter brand guide.pdf` (Adobe Illustrator, Oct 2024) | Fonts (**Instrument Sans** headlines, **Roboto** body), headline blue `#085185`, logo blue `#3F8DCC`, logo grey `#6A6D6E`, all six logo lockups, print/web body-size rules |
| **7 full-width homepage screenshots** (`uploads/site-1-hero.png` … `site-7-footer.png`, captured 1 Aug 2026) | The real visual system: flat square-edged design, exact colors sampled from pixels, section order, hero tile grid, values/numbers/services/testimonial/contact/FAQ/footer patterns, the Capitol hero photo (cropped to `assets/hero-capitol.png`) |
| https://pricereporter.com/ (text fetch) | Verbatim copy: mission, service descriptions, MAS benefits, testimonial, FAQ questions, footer link inventory |

**Colors sampled from the live site** (these override anything guessed): site accent orange `#FF6000`, navy band `#0C4166`, utility bar `#383838`, section band grey `#E4E3E3`, hero tiles `#007CCE` / `#005E9C` / `#00416D`, hero wash `#D8EEFE → #BDDCEF`, headline black `#1A1A1A`. Note the site's orange (`#FF6000`) is **not** the logo cube's orange (`#FF5624`) — the logo orange is reserved for the artwork.

**What is still missing:** the site's HTML/CSS could not be fetched from this environment, so exact paddings, breakpoints, hover timings and font weights per element are *read from screenshots, not measured*. Client logos and the BBB badge are not included. Interior pages (service pages, blog, tools, case studies) were not captured — the service/article screens in the website kit are extrapolated from the homepage vocabulary and are marked as such.

**"Slightly more modern" — what was deliberately changed:** the type scale is tightened and enlarged, body leading opened up (1.6), the FAQ/values spacing loosened, hover transitions standardised at 140/200ms, and a 2–4px radius scale plus a small shadow set exist **for in-product panels only**. Everything on the marketing surface stays 0px-radius and shadow-free like the real site. Nothing about the color logic, banding or heading pattern was "improved" away.

---

## Index

**Foundations**
- `styles.css` — the single entry point consumers link (`@import` list only)
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `base.css`
- `tokens/refresh.css` — the **refresh theme**: `data-theme="refresh"` softens corners to 10px, adds a quiet shadow set, opens the section rhythm to 112px, enlarges display type and switches headings to sentence case. Same palette, fonts, banding and orange logic, so a visitor moving between a campaign page and the live site feels continuity, not a rebrand. Use it for landing pages and new campaign assets; **never** on recreations of the current site.
- `guidelines/*.card.html` — 27 specimen cards (Colors, Type, Spacing, Brand — including a side-by-side of the default and refresh themes)
- `assets/` — logo lockups (transparent PNG), `hero-capitol.png`, `fonts/` (woff2), `icons/` (81 SVGs)
- `thumbnail.html`

**Components** (`components/<group>/`, CSS in `components/components.css`)
- `core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Logo**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- `surfaces/` — **SectionHeading** (+ **BoxedHeading**), **LinkTile**, **ValueItem**, **StatCard** (+ **NumbersBand**), **ServiceCard**, **Testimonial**, **CTABanner**, **Card**
- `feedback/` — **Alert**, **Tooltip**, **Dialog**
- `navigation/` — **Tabs**, **Accordion**, **Breadcrumb**
- `data/` — **DataTable**

Each has `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`.

**UI kits**
- `ui_kits/website/` — marketing site. `index.html` recreates the **homepage section-for-section** (hero + tile grid, values, numbers box, services band, testimonial, clients, contact block, FAQ, footer). Service page / article / contact screens are extrapolations — see its README.
- `ui_kits/landing/` — **campaign landing page** (refresh theme): direct-response LP for paid Google traffic. No site nav, form above the fold, navy proof bar, objection FAQ, sticky CTA bar. See its README for the DR rationale and the pre-launch checklist.
- `ui_kits/portal/` — GSA Order Management & Catalog Upload portal: dashboard, catalog upload, compliance. **Original design, not a recreation** — the real portal is behind a login.

**Other:** `SKILL.md` (Agent-Skills wrapper).

### Intentional additions
Derived directly from the homepage, not invented: `LinkTile` (hero blue tiles with the speech-bubble tail), `ValueItem` (orange-chevron value block), `NumbersBand` + `BoxedHeading` (the "OUR NUMBERS TELL THE STORY" box), `ServiceCard` (title + orange rule + outlined LEARN MORE), `Testimonial` (navy band with logo plate). Standard primitives with no marketing-site counterpart — `Card`, `Alert`, `Tooltip`, `Dialog`, `Tabs`, `Breadcrumb`, `DataTable`, `Switch`, `Radio` — exist for the product UI; they follow the same flat, square rules. No Toast, Avatar, Pagination or Drawer: nothing in the sources calls for them.

---

## Content fundamentals

**Voice: the expert who has done this a thousand times.** Declarative, specific, unhurried. No emoji, ever. The one place exclamation marks appear is inside a client quote ("Thanks!!!") — never in Price Reporter's own copy.

**Third person for authority, "we" for the work, "you/your" for the client.** *"Price Reporter has been obtaining GSA contracts and opened doors to Government procurement for hundreds of businesses."* / *"We ensure your prices remain competitive, your catalog stays current, and compliant."*

**Title-then-continuation is a real copy pattern.** The values block reads as one sentence split across bold title and grey body: **Our Mission** / *is to serve client's unique needs to effectively establish, grow and maximize their GSA business.* Keep it — do not rewrite these into standalone sentences.

**Casing.** Section headings are **UPPERCASE** ("OUR SERVICES", "PRICE REPORTER VALUES", "FAQ", "OUR CLIENTS"). Nav items and button labels are uppercase. The hero headline and card titles are **Title/sentence case**. FAQ questions are Title Case with a question mark. Never all-caps a full sentence of body copy.

**Length.** Hero headline runs long by design (~20 words, 4 lines) — that is the brand's actual pattern, not a mistake. Service blurbs are 2 sentences / ~28 words. Value blurbs one sentence. Section headings 2–4 words.

**Domain vocabulary as GSA spells it.** GSA, MAS, GSA Advantage, SIN, TAA compliant, EDI, modification, price list, IFF, 72A, option period, Schedule holder, FedMall, DLA, BPA, FSSI, FCP. Capitalize *Government* when it means the U.S. Federal Government — the site consistently does.

**CTAs, verbatim from the site.** "GET CONSULTATION" (utility bar), "LEARN MORE" (service columns), "GET FREE CONSULTATION" (contact block), "MORE TESTIMONIALS". Supporting line: *"Contact us at 201.567.6646 or provide your details below for one hour free consultation."*

**Microcopy.** Field hints state the format (`Format: 47QSWA18D008F`); errors say what to fix; success states name the next step ("A GSA specialist will contact you within one business day"). No "oops".

---

## Visual foundations

**The idea:** a flat, square, government-grade layout — solid color blocks, hard edges, no ornament — with **orange as the only accent**, used for numbers, chevrons, rules and every call to action.

**Radii: zero on the site.** Every tile, button, input, band and box on the live site has square corners; `--radius-card` and `--radius-control` are `0`. The 2–4px steps (`--radius-app`) exist for in-product panels, and the refresh theme lifts cards to 10px / controls to 6px for campaign pages.

**Shadows: none on marketing surfaces.** Separation comes from flat bands, 1px keylines and rules. The only shadow-like effect on the site is the **hard 4px offset** under hero tiles (`box-shadow: 4px 4px 0 rgb(0 33 56 / .28)`). `--shadow-md/lg` exist for dropdowns, modals and product panels.

**Page structure is a stack of flat bands**, alternating white → grey `#E4E3E3` → navy `#0C4166`. The hero has its own wash (`--gradient-hero`) with the faded Capitol dome bleeding off the right edge. That gradient is the **only** gradient in the system.

**Color logic.** Blue `#085185` = section headings, primary buttons, table headers. Navy `#0C4166` = testimonial band, contact block, footer, app sidebar, stat labels. Tile blues (`#007CCE / #005E9C / #00416D`) = the three hero columns, one depth each. Orange `#FF6000` = stat figures, chevron bullets, the 3px service rule, all CTAs, active tab underline, link hover. Black `#1A1A1A` = hero headline, card titles, FAQ questions. Grey `#3F3F3F/#6A6D6E` = body copy. Charcoal `#383838` = utility bar only.

**Type.** Instrument Sans Bold everywhere structural — hero display (34–48px), section headings (30–40px uppercase), card titles, nav (13px uppercase +0.08em), buttons, stat figures (38–52px, tabular), footer heads (20px uppercase), even the "Contact us at…" support line. Roboto Regular for body copy at 16px web / 12pt print, Roboto Bold for in-copy emphasis. Section headings are lightly tracked (+0.02em), not widely spaced.

**Two signature rules.** A **5px solid black rule** under the hero headline, and a **3px orange rule** between a service title and its body. Keylines elsewhere are 1px grey; the numbers box is a 2px navy keyline with the heading breaking through its top edge.

**Iconography is minimal by design** — see below. The homepage uses essentially two glyphs: the orange chevron and the play circle on video tiles.

**Buttons.** Three shapes only: solid orange (utility CTA), white with a 2px orange border and orange uppercase text (LEARN MORE — fills orange on hover), and transparent with an orange border on navy (GET FREE CONSULTATION). Blue solid/outline variants exist for the product UI.

**States.** Hover is a **color inversion**, never a lift: outlined buttons fill orange, blue tiles turn orange, links go blue → orange, nav items go navy → orange, table rows tint pale blue. Press adds no transform. Focus is a 3px `rgb(0 124 206 / .38)` halo, never removed. Disabled is 45% opacity. Active tab = 3px orange underline; active sidebar item = inset orange rule.

**Motion.** 140ms controls / 200ms surfaces on `cubic-bezier(.2,.6,.2,1)`. No bounce, no spring, no parallax, no autoplay, no scroll animation. `prefers-reduced-motion` zeroes it all.

**Layout.** 1200px container (site content sits ~1160px wide), 24px gutters, 96px section rhythm, 760px article measure, 4px spacing base. Hero tiles are three ~300px columns, each a header tile plus a 2-up grid. Services are 4 equal columns on the grey band. The contact form is a single row of 5 fields. Sticky white header over a charcoal utility bar; a fixed circular "back to top" affordance bottom-right; the live site also carries a fixed chat prompt (not reproduced).

**Transparency & blur:** almost none. Only the modal scrim (`--surface-overlay`) and the product header. The hero photo is a heavily faded (near-white) photograph, cool blue-tinted — that is the imagery treatment for this brand: desaturated, high-key, federal architecture, never a full-contrast photo behind text.

---

## Iconography

**Substitution — please review.** The brand guide ships no icon library and the site's own SVGs were unreachable, so the set is **[Lucide](https://lucide.dev)** (24px grid, 2px stroke) — the closest neutral match to the two glyph shapes the site actually shows (a chevron and a play circle). 81 SVGs live in `assets/icons/`; `brand-facebook` / `brand-x` come from Simple Icons. **If PriceReporter has a real icon set, send it and swap the folder.**

- **Rendering:** always the `Icon` component — it paints the SVG as a CSS `mask`, so glyphs inherit `currentColor`. Set `window.PR_ICON_BASE` once per page.
- **The brand's two signature glyphs:** `chevron-right` in orange as the bullet for values, FAQ rows, dropdown items and "MORE TESTIMONIALS"; `circle-play` in white on hero tiles that link to video.
- **Sizes:** 12–13px in badges, 16px inline and inside buttons, 20–22px for chevrons and tile affordances, 30px+ only for the star beside the 4.9 rating.
- **Containers:** the marketing site has none — glyphs sit bare on the background. Blue `#085185` squares behind white glyphs are a **product-UI-only** pattern.
- **Emoji: never. Unicode as icons: never** (the `✓` / `—` cells in a comparison table are content, not iconography).

---

## Logo

Six lockups in `assets/`, extracted from the brand-guide artwork: `logo-horizontal-{color,mono}.png`, `logo-stacked-{color,mono}.png`, `mark-{color,mono}.png`. Serve them through the `Logo` component. The site uses the horizontal color lockup at ~38px in the header.

- **Do not rotate, recolor, restretch or re-typeset.** The wordmark is Roboto — PRICE in `#3F8DCC`, REPORTER in `#6A6D6E` — but use the file, not type.
- Clear space = the height of the cube mark. Minimum 24px lockup height, 20px mark.
- The lockups are dark-art-on-light. On navy: white panel behind the color lockup, **or** the mark paired with a white "PRICEREPORTER" wordmark in Roboto Medium (the footer/sidebar pattern).
- The PNGs carry faint white antialiasing at glyph edges. **Ask the brand owner for the original vector (SVG/EPS)** — the one asset gap worth closing.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script>window.PR_ICON_BASE = 'assets/icons/'; window.PR_ASSET_BASE = 'assets/';</script>
<script src="_ds_bundle.js"></script>
```

```jsx
const { Button, SectionHeading, ServiceCard, LinkTile } = window.PriceReporterDesignSystem_2cd382;
```

Utility classes from `tokens/base.css`: `.pr-container`, `.pr-container-narrow`, `.pr-section`, `.pr-band`, `.pr-inverse`, `.pr-accent-rule`, `.pr-rule-black`, `.pr-chevron-list`, `.pr-caps-label`.
