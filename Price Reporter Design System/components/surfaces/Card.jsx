import React from 'react';

export function Card({
  children, eyebrow, title, footer, media, mediaAlt = '',
  variant = 'default', padding = 'md', interactive = false, as: As = 'div', className = '', ...rest
}) {
  const cls = ['pr-card',
    variant !== 'default' ? 'pr-card--' + variant : '',
    padding === 'lg' ? 'pr-card--lg' : '',
    media ? 'pr-card--flush' : '',
    className].filter(Boolean).join(' ');
  const body = (
    <>
      {eyebrow ? <div className="pr-card__eyebrow">{eyebrow}</div> : null}
      {title ? <h3 className="pr-card__title">{title}</h3> : null}
      <div className="pr-card__body">{children}</div>
      {footer ? <div className="pr-card__footer">{footer}</div> : null}
    </>
  );
  return (
    <As className={cls} data-interactive={interactive ? 'true' : undefined} {...rest}>
      {media ? <img className="pr-card__media" src={media} alt={mediaAlt} /> : null}
      {media ? <div style={{ padding: 'var(--card-pad)' }}>{body}</div> : body}
    </As>
  );
}
