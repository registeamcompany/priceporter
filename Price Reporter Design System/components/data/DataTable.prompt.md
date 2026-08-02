Row-dense table for GSA orders, catalog SKUs and price-list line items. Right-align every numeric column.

```jsx
<DataTable
  columns={[
    { key: 'po', label: 'PO number', strong: true },
    { key: 'agency', label: 'Agency' },
    { key: 'total', label: 'Total', align: 'right' },
    { key: 'status', label: 'Status', render: (r) => <Badge tone={r.tone}>{r.status}</Badge> },
  ]}
  rows={rows}
  footer={<><span>32 orders</span><Button variant="link">Export CSV</Button></>} />
```

Use `compact` in app panels, `striped` for long price lists.
