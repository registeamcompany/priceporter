Modal for confirmations and short forms (submit catalog, request a mod). Renders nothing when `open` is false.

```jsx
<Dialog open={open} icon="upload" title="Submit catalog to GSA Advantage"
  description="4,182 SKUs will be transmitted via EDI."
  footer={<><Button variant="secondary" onClick={close}>Cancel</Button><Button onClick={submit}>Submit</Button></>}
  onClose={close} />
```

Clicking the scrim closes it. Keep bodies short — anything longer belongs on a page.
