import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, disabled = false, className = '', ...rest }) {
  return (
    <label className={('pr-check ' + className).trim()} data-disabled={disabled ? 'true' : undefined}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="pr-check__box"><Icon className="pr-check__tick" name="check" size={13} /></span>
      <span className="pr-check__text">
        <span>{label}</span>
        {description ? <span className="pr-check__desc">{description}</span> : null}
      </span>
    </label>
  );
}
