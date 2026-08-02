import React from 'react';

export function Tooltip({ content, placement = 'top', children, className = '', ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span
      className={('pr-tooltip ' + className).trim()}
      data-open={open ? 'true' : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...rest}
    >
      {children}
      <span className="pr-tooltip__bubble" data-placement={placement} role="tooltip">{content}</span>
    </span>
  );
}
