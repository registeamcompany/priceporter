import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumb({ items = [], className = '', ...rest }) {
  return (
    <nav className={('pr-crumbs ' + className).trim()} aria-label="Breadcrumb" {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={it.label}>
          {i > 0 ? <span className="pr-crumbs__sep"><Icon name="chevron-right" size={13} /></span> : null}
          {it.href && i < items.length - 1
            ? <a href={it.href}>{it.label}</a>
            : <span className="pr-crumbs__current" aria-current="page">{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
