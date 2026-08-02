# Price Reporter — "Get a GSA Schedule Contract" Landing Page

Direct-response landing page for paid Google traffic (segment: business owners 45–64, transactional intent). Built on the Price Reporter design system as a modular Vite + Vanilla JS/CSS project.

## Main Entry & Quick Start

**PRIMARY LANDING PAGE: `/index.html`** (Entry: `src/main.js`).

```bash
npm install
npm run dev      # Local dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Serve production build (http://localhost:4173)
```

## Section Flow

1. `header` — Global Sticky Header (`components/Header.html`)
2. `hero` — Hero Section with Capitol Photo & Form (`components/v2/HeroBV2.html`)
3. `trust-bar` — Trust Badges & Accreditations (`components/v2/TrustBarB2.html`)
4. `prize` — Market Volume Banner ($52B / $2.3M) (`components/v2/PrizeBV2.html`)
5. `how-it-works` — 5 Steps to Your Contract (`components/v2/HowItWorksB2.html`)
6. `reassurance` — Reassurance & Risk Mitigation (`components/b/ReassuranceB.html`)
7. `social-proof` — Client Growth Case Cards (`components/v2/CasesBV2.html`)
8. `why-pr` — Win it / Run it / Grow it Services with Vector Diagrams (`components/v2/WhyPRB2.html`)
9. `quiz` — GSA Qualification Quiz (`components/v2/QuizB2.html`)
10. `timing` — Why Now & GSA Audit Log Schematic (`components/b/TimingB.html`)
11. `team` — "Since 2006. Still picking up the phone" with Real Team Photo (`components/v2/TeamBV2.html`)
12. `testimonials` — Verified Client Reviews & Real Logos (`components/v2/TestimonialsB2.html`)
13. `faq` — Accordion FAQ (`components/v2/FaqB2.html`)
14. `final-cta` — Final Form CTA (`components/b/FinalCtaB.html`)
15. `footer` — Global Footer (`components/Footer.html`)

## Directory Structure

- `index.html` — Skeleton HTML with mount divs
- `src/main.js` — Core script loading all raw components and CSS
- `src/components/` — Individual block HTML templates
- `src/styles/` — Isolated component stylesheets + design system tokens
- `src/scripts/` — Lead form handlers, quiz logic, FAQ accordion, sticky UI, reveals
- `public/assets/` — Real logos, Capitol hero photo, team working photo
