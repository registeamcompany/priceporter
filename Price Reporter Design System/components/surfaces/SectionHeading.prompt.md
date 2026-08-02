Opens every section on pricereporter.com: centered UPPERCASE brand-blue heading, nothing else. `BoxedHeading` is the stats variant where the title straddles a navy keyline box.

```jsx
<SectionHeading title="Our services" />
<SectionHeading title="Price Reporter values" description="Founded in 2006." />
<BoxedHeading title="Our numbers tell the story"><NumbersBand items={stats} /></BoxedHeading>
```

Pass `caps={false}` only for the hero headline (sentence case, near-black, with the heavy black rule under it).
