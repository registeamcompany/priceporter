# UI kit — GSA Order Management / Catalog Upload portal

Three click-through app screens in `index.html` (switcher, bottom right).

| Screen | File | What it shows |
|---|---|---|
| Dashboard | `DashboardScreen.jsx` | Stat row, warning alert, recent-orders table with tabs and filters, GSA Advantage sync panel, compliance to-dos |
| Catalog upload | `CatalogUploadScreen.jsx` | 4-step progress strip, validated file card, flagged-lines table, submission settings, transmit dialog |
| Compliance | `ComplianceScreen.jsx` | Contract line items by SIN, post-award obligation checklist, reference accordion |

`AppShell.jsx` is the navy sidebar shell: cube mark + Roboto wordmark, nav with counts and an inset orange active rule, topbar with title/subtitle and the account chip.

## Source fidelity — read this
**This is an original design against the brand system, not a recreation.** Price Reporter's OMS and GSA Advantage Catalog Upload Portal sit behind a login; no screenshots, Figma file or code were supplied. Structure and terminology come from public copy (EDI catalog upload, order life cycle, price list expiry, modifications, TAA compliance, SINs, 72A reporting); all PO numbers, SKUs, agencies and figures are fabricated sample data.

It follows the marketing system's rules — square corners, flat fills, orange accents — with the two product-only affordances the design system allows: 4px radii on panels and light shadows on floating layers.

**Send screenshots of the real portal and this kit should be rebuilt against them.**
