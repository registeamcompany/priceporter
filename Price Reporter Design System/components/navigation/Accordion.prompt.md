FAQ list, exactly as on the homepage: orange chevron, bold black question, hairline divider per row. The chevron turns down when the row opens.

```jsx
<Accordion items={[
  { id: 'q1', question: 'Should You Use a GSA Contract Specialist, Or Do It Yourself?', answer: '…' },
  { id: 'q2', question: 'Why get a GSA business contract?', answer: '…' },
]} />
```

The live FAQ starts with every row collapsed — omit `defaultOpen` to match it. `allowMultiple` for long reference pages.
