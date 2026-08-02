import React from 'react';
import { Icon } from '../core/Icon.jsx';

function InputField({ label, hint, error, required, htmlFor, children, className = '' }) {
  return (
    <div className={('pr-field ' + className).trim()}>
      {label ? <label className="pr-field__label" htmlFor={htmlFor}>{label}{required ? <span className="pr-field__req">*</span> : null}</label> : null}
      {children}
      {error ? <span className="pr-field__error"><Icon name="circle-alert" size={13} />{error}</span>
        : hint ? <span className="pr-field__hint">{hint}</span> : null}
    </div>
  );
}

export function Input({
  label, hint, error, required, icon, prefix, suffix, size = 'md',
  multiline = false, onDark = false, disabled = false, id, className = '', ...rest
}) {
  const inputId = id || 'pr-in-' + (rest.name || Math.random().toString(36).slice(2, 7));
  const shellCls = ['pr-input', size !== 'md' ? 'pr-input--' + size : '', multiline ? 'pr-textarea' : '', onDark ? 'pr-input--on-dark' : ''].filter(Boolean).join(' ');
  const El = multiline ? 'textarea' : 'input';
  return (
    <InputField label={label} hint={hint} error={error} required={required} htmlFor={inputId} className={[className, onDark ? 'pr-field--on-dark' : ''].filter(Boolean).join(' ')}>
      <span className={shellCls} data-invalid={error ? 'true' : undefined} data-disabled={disabled ? 'true' : undefined}>
        {icon ? <Icon className="pr-input__icon" name={icon} size={17} /> : null}
        {prefix ? <span className="pr-input__affix">{prefix}</span> : null}
        <El id={inputId} className="pr-input__el" required={required} aria-required={required || undefined} disabled={disabled} {...rest} />
        {suffix ? <span className="pr-input__affix">{suffix}</span> : null}
      </span>
    </InputField>
  );
}
