Switches views within one page — contract stages, order queues, catalog vs. pricing.

```jsx
<Tabs items={[{id:'open',label:'Open orders',count:32},{id:'shipped',label:'Shipped'}]} value={tab} onChange={setTab} />
<Tabs variant="pill" items={[{id:'m',label:'Month'},{id:'q',label:'Quarter'}]} />
```

The active underline tab is marked with the orange rule; keep labels to 1–3 words.
