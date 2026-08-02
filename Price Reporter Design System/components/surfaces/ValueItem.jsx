import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ValueItem({ title, children, className = '', ...rest }) {
  return (
    <div className={('pr-value ' + className).trim()} {...rest}>
      <span className="pr-value__glyph"><Icon name="chevron-right" size={20} /></span>
      <div>
        <h3 className="pr-value__title">{title}</h3>
        <p className="pr-value__body">{children}</p>
      </div>
    </div>
  );
}
