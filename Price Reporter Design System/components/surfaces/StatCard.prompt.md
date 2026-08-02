Orange figure + navy bold label. On the marketing site these only ever appear as a row inside `BoxedHeading` ("OUR NUMBERS TELL THE STORY").

```jsx
<BoxedHeading title="Our numbers tell the story">
  <NumbersBand items={[
    { value: '20+', label: 'Years working with GSA' },
    { value: '2.5M+', label: 'GSA orders processed' },
    { value: '4.9', suffixIcon: 'star', label: 'Customer rating' },
  ]} />
</BoxedHeading>
```

Real published figures: 20+ years, 400+ contracts awarded, 1000+ companies served, 1500+ contracts under management, 20K+ modifications completed, 2.5M+ orders processed, 4.9★ rating. Use `boxed` + `tone="brand"` inside the product UI.
