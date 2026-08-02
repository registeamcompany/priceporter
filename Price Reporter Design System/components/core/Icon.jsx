import React from 'react';

/** Masked-SVG icon. Glyphs are Lucide SVGs copied into assets/icons/. */
export function Icon({ name, size = 20, color, base, className = '', style, ...rest }) {
  const root = base || (typeof window !== 'undefined' && window.PR_ICON_BASE) || 'assets/icons/';
  const url = `url("${root}${name}.svg")`;
  return (
    <span
      className={('pr-icon ' + className).trim()}
      aria-hidden="true"
      style={{ width: size, height: size, background: color || 'currentColor', WebkitMaskImage: url, maskImage: url, ...style }}
      {...rest}
    />
  );
}
