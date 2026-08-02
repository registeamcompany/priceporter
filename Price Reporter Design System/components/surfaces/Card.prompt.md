The default container: 1px grey border, 14px radius, soft navy-tinted shadow, white surface.

```jsx
<Card eyebrow="GSA Contract" title="Catalog maintenance" footer={<Button variant="link">Read more</Button>}>
  We keep your catalog current, competitive and compliant.
</Card>
<Card variant="inverse" title="Order Management System">Automate your order life cycle.</Card>
```

Use `interactive` only when the whole card is a link. Never stack shadows deeper than `--shadow-lg`.
