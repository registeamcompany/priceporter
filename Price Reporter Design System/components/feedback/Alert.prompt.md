Inline, non-blocking status message — upload results, compliance warnings, expiring modifications.

```jsx
<Alert tone="success" title="Catalog accepted">GSA Advantage processed 4,182 SKUs with no errors.</Alert>
<Alert tone="warning" title="Price list expires in 21 days" onClose={() => {}} />
```

Alerts sit in the content flow, above the thing they describe. Never use them for marketing copy.
