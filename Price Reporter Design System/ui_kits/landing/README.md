# UI kit — campaign landing page (refresh theme)

`index.html` is a single-goal, direct-response landing page for paid Google traffic. It runs on the same tokens and components as the site recreation, with `data-theme="refresh"` applied — so it reads as a modernised Price Reporter page, not a different brand.

## Direct-response decisions
- **No site navigation.** The header carries the logo, one trust line, the phone number and one button. Nothing links away from the page.
- **Form above the fold**, right-hand column, 5 fields max (name, company, email, phone, need). A second, shorter form closes the page.
- **Sticky conversion bar** at the bottom: offer restatement + click-to-call + primary CTA.
- **One offer, repeated:** "Free 1-hour GSA consultation, no obligation" — in the badge, both forms, the sticky bar and the closing block.
- **Proof early:** three figures under the hero copy, then the full 7-figure band on navy immediately after.
- **Objection-handling FAQ** (cost, timeline, guarantees, existing contract) rather than the site's educational FAQ.
- Click-to-call `tel:` links everywhere the phone number appears — the primary conversion for this audience.

## Section order
Header → hero (offer + form) → navy proof bar → "Is a GSA Schedule right for your business?" → "What you get" (grey band) → "How it works" (4 steps) → testimonial → objection FAQ (grey band) → closing block with second form → minimal footer → sticky CTA bar.

## What the refresh theme changes vs. the live site
10px card corners instead of 0, a quiet shadow set, 112px section rhythm, larger display type, sentence-case headings, and a 2px hover lift on cards, tiles and the orange CTA. Palette, fonts, banding, orange accent logic and copy voice are unchanged — see `tokens/refresh.css` and the "Refresh theme" specimen card.

## Before launch
- Wire the forms to your CRM and add conversion tracking (the demo just swaps to a success state).
- Add the real BBB badge and client logos to the proof bar — they are the strongest trust signals available and no files were supplied.
- Replace the placeholder `tel:` with your campaign tracking number if you use call tracking.
- Copy is written against published claims only; have Legal check the "no obligation" and rating statements before spend.
