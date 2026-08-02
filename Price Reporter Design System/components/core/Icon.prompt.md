A single-color Lucide glyph, tinted with currentColor via CSS mask — use it for every icon instead of inlining SVG.

```jsx
<Icon name="shield-check" size={24} />
<Icon name="arrow-right" size={16} color="var(--brand-accent)" />
```

Set `window.PR_ICON_BASE` once per page to the relative path of `assets/icons/`. Available glyph names are the file names in that folder (~78 Lucide icons plus `brand-facebook`, `brand-x`).
