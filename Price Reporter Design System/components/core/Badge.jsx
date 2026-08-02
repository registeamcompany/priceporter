import React from 'react';
import { Icon } from './Icon.jsx';

export function Badge({ children, tone = 'neutral', variant = 'soft', icon, className = '', ...rest }) {
  const cls = ['pr-badge', 'pr-badge--' + variant, 'pr-badge--' + tone, className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{icon ? <Icon name={icon} size={12} /> : null}{children}</span>;
}
