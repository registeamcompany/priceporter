import React from 'react';
import { Icon } from '../core/Icon.jsx';

const ICONS = { info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert' };

export function Alert({ tone = 'info', title, children, onClose, icon, className = '', ...rest }) {
  return (
    <div className={['pr-alert', 'pr-alert--' + tone, className].filter(Boolean).join(' ')} role={tone === 'danger' ? 'alert' : 'status'} {...rest}>
      <Icon className="pr-alert__icon" name={icon || ICONS[tone]} size={18} />
      <div>
        {title ? <p className="pr-alert__title">{title}</p> : null}
        {children ? <p className="pr-alert__body">{children}</p> : null}
      </div>
      {onClose ? <button className="pr-alert__close" type="button" aria-label="Dismiss" onClick={onClose}><Icon name="x" size={15} /></button> : null}
    </div>
  );
}
