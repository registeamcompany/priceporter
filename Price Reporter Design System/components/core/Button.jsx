import React from 'react';
import { Icon } from './Icon.jsx';

export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  fullWidth = false, onDark = false, href, disabled = false, className = '', ...rest
}) {
  const cls = [
    'pr-btn', 'pr-btn--' + variant,
    size !== 'md' ? 'pr-btn--' + size : '',
    fullWidth ? 'pr-btn--full' : '',
    onDark ? 'pr-btn--on-dark' : '',
    className,
  ].filter(Boolean).join(' ');
  const iconSize = size === 'lg' ? 20 : 16;
  const inner = (
    <>
      {iconLeft ? <Icon name={iconLeft} size={iconSize} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={iconSize} /> : null}
    </>
  );
  if (href && !disabled) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button className={cls} type={rest.type || 'button'} disabled={disabled} {...rest}>{inner}</button>;
}
