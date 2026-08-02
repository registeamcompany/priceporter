import React from 'react';

const FILES = {
  'horizontal-color': 'logo-horizontal-color.png',
  'horizontal-mono': 'logo-horizontal-mono.png',
  'stacked-color': 'logo-stacked-color.png',
  'stacked-mono': 'logo-stacked-mono.png',
  'mark-color': 'mark-color.png',
  'mark-mono': 'mark-mono.png',
};

export function Logo({ variant = 'horizontal', tone = 'color', height = 34, base, className = '', style, ...rest }) {
  const root = base || (typeof window !== 'undefined' && window.PR_ASSET_BASE) || 'assets/';
  const key = (variant === 'mark' ? 'mark' : variant) + '-' + tone;
  return (
    <span className={('pr-logo ' + className).trim()} style={style} {...rest}>
      <img src={root + (FILES[key] || FILES['horizontal-color'])} alt="PriceReporter" style={{ height }} />
    </span>
  );
}
