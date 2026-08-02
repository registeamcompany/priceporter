import React from 'react';

export function Radio({ label, description, disabled = false, className = '', ...rest }) {
  return (
    <label className={('pr-check pr-check--radio ' + className).trim()} data-disabled={disabled ? 'true' : undefined}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="pr-check__box"><span className="pr-check__dot" /></span>
      <span className="pr-check__text">
        <span>{label}</span>
        {description ? <span className="pr-check__desc">{description}</span> : null}
      </span>
    </label>
  );
}
