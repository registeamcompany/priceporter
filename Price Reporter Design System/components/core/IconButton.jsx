import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon, label, variant = 'ghost', size = 'md', className = '', ...rest }) {
  const cls = ['pr-iconbtn', 'pr-iconbtn--' + size, 'pr-iconbtn--' + variant, className].filter(Boolean).join(' ');
  return (
    <button className={cls} type="button" aria-label={label} title={label} {...rest}>
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
}
