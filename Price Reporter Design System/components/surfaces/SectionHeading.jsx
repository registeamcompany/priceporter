import React from 'react';

export function SectionHeading({ eyebrow, title, description, align = 'center', caps = true, className = '', ...rest }) {
  const cls = ['pr-sectionhead', align === 'left' ? 'pr-sectionhead--left' : '', caps ? '' : 'pr-sectionhead--sentence', className].filter(Boolean).join(' ');
  return (
    <header className={cls} {...rest}>
      {eyebrow ? <div className="pr-sectionhead__eyebrow">{eyebrow}</div> : null}
      <h2 className="pr-sectionhead__title">{title}</h2>
      {description ? <p className="pr-sectionhead__sub">{description}</p> : null}
    </header>
  );
}

/** Section heading that sits astride a navy keyline box, as in "OUR NUMBERS TELL THE STORY". */
export function BoxedHeading({ title, children, className = '', ...rest }) {
  return (
    <section className={('pr-boxed-head ' + className).trim()} {...rest}>
      <h2 className="pr-boxed-head__title">{title}</h2>
      {children}
    </section>
  );
}
