import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, active = false, onRemove, onClick, className = '', ...rest }) {
  return (
    <span
      className={('pr-tag ' + className).trim()}
      data-active={active || undefined}
      data-clickable={onClick ? 'true' : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
      {onRemove ? (
        <button className="pr-tag__remove" type="button" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <Icon name="x" size={12} />
        </button>
      ) : null}
    </span>
  );
}
