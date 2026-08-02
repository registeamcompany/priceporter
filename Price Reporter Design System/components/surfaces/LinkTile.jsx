import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function LinkTile({ label, depth = 1, head = false, icon, video = false, href = '#', className = '', ...rest }) {
  const cls = ['pr-tile', depth > 1 ? 'pr-tile--' + depth : '', head ? 'pr-tile--head' : '', className].filter(Boolean).join(' ');
  return (
    <a className={cls} href={href} {...rest}>
      {icon || video ? (
        <span className="pr-tile__top">
          {icon ? <Icon name={icon} size={18} /> : <span />}
          {video ? <Icon name="circle-play" size={22} /> : null}
        </span>
      ) : null}
      <span className="pr-tile__label">{label}</span>
    </a>
  );
}
