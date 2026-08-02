# UI kit — pricereporter.com marketing site

`index.html` is a click-through of four screens (switcher, bottom right).

| Screen | File | Fidelity |
|---|---|---|
| **Home** | `HomePage.jsx` | **Recreation.** Built section-for-section from the 7 homepage screenshots: hero (headline + 5px black rule + three tile columns + faded Capitol photo), PRICE REPORTER VALUES, OUR NUMBERS TELL THE STORY keyline box, OUR SERVICES on the grey band, navy Testimonials band, OUR CLIENTS, navy Contact Us block with the 5-field row, FAQ accordion |
| GSA Contract service page | `ServicePage.jsx` | **Extrapolation** — no interior page was captured. Uses only homepage vocabulary |
| Article | `ArticlePage.jsx` | **Extrapolation** — blog layout not captured |
| Contact | `ContactPage.jsx` | **Extrapolation** — a fuller consultation form than the homepage row |

`SiteChrome.jsx` = charcoal utility bar (phone, GET CONSULTATION, Log In, Contact), white sticky header with uppercase nav and a chevron dropdown, and the navy four-column footer with the real link inventory.

## Known gaps vs. the live site
- **Client logos and the BBB badge are not included** — no image files were supplied. The clients row renders company names in type with a visible note; swap in real logos.
- The fixed chat prompt ("GSA Experts are Online. Chat with Us!") and the back-to-top button are not reproduced.
- Exact paddings/breakpoints are read from screenshots, not from CSS. Interior-page templates need one screenshot each to become recreations.
- Copy is verbatim from the site; the FAQ answers are summarised from the site's long-form text.
