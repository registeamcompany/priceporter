import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tabs({ items = [], value, onChange, variant = 'underline', className = '', ...rest }) {
  const active = value != null ? value : items[0] && items[0].id;
  return (
    <div className={['pr-tabs', variant === 'pill' ? 'pr-tabs--pill' : '', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {items.map((it) => (
        <button
          key={it.id}
          className="pr-tab"
          type="button"
          role="tab"
          aria-selected={it.id === active}
          onClick={() => onChange && onChange(it.id)}
        >
          {it.icon ? <Icon name={it.icon} size={16} /> : null}
          {it.label}
          {it.count != null ? <span className="pr-tab__count">{it.count}</span> : null}
        </button>
      ))}
    </div>
  );
}
