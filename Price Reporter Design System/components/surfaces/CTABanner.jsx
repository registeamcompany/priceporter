import React from 'react';

export function CTABanner({ eyebrow, title, description, actions, children, tone = 'navy', className = '', ...rest }) {
  return (
    <section className={['pr-cta', 'pr-cta--' + tone, className].filter(Boolean).join(' ')} {...rest}>
      {eyebrow ? <div className="pr-cta__eyebrow">{eyebrow}</div> : null}
      <h2 className="pr-cta__title">{title}</h2>
      {description ? <p className="pr-cta__desc">{description}</p> : null}
      {children}
      {actions ? <div className="pr-cta__actions">{actions}</div> : null}
    </section>
  );
}
