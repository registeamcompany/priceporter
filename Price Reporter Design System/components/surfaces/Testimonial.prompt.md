Full-width navy testimonial band: white client-logo plate, "Testimonials" heading, quote opening with a bold "Price Reporter", attribution line, then a keyline footer with MORE TESTIMONIALS and carousel arrows.

```jsx
<Testimonial brand="Price Reporter"
  quote="are helping make my life much easier and helping me feel so much better about our GSA contract. Thanks!!!"
  name="Kristen Briggs" role="President" company="General Mailing & Shipping Systems, Inc."
  moreHref="/testimonials" onPrev={prev} onNext={next} />
```

Client logos are not in this system — pass `logo` with a real file or let it fall back to the company name.
