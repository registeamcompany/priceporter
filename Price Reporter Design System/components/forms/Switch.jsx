import React from 'react';

export function Switch({ label, disabled = false, className = '', ...rest }) {
  return (
    <label className={('pr-switch ' + className).trim()} data-disabled={disabled ? 'true' : undefined}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="pr-switch__track"><span className="pr-switch__knob" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
