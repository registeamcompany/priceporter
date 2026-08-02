import React from 'react';
import { Icon } from '../core/Icon.jsx';

function SelectField({ label, hint, error, required, htmlFor, children, className = '' }) {
  return (
    <div className={('pr-field ' + className).trim()}>
      {label ? <label className="pr-field__label" htmlFor={htmlFor}>{label}{required ? <span className="pr-field__req">*</span> : null}</label> : null}
      {children}
      {error ? <span className="pr-field__error"><Icon name="circle-alert" size={13} />{error}</span>
        : hint ? <span className="pr-field__hint">{hint}</span> : null}
    </div>
  );
}

export function Select({ label, hint, error, required, options = [], size = 'md', id, className = '', ...rest }) {
  const selectId = id || 'pr-sel-' + (rest.name || Math.random().toString(36).slice(2, 7));
  return (
    <SelectField label={label} hint={hint} error={error} required={required} htmlFor={selectId} className={className}>
      <span className={['pr-select', size !== 'md' ? 'pr-select--' + size : ''].filter(Boolean).join(' ')}>
        <select id={selectId} className="pr-select__el" required={required} aria-required={required || undefined} {...rest}>
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <Icon className="pr-select__chev" name="chevron-down" size={17} />
      </span>
    </SelectField>
  );
}
