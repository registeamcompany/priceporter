import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Dialog({ open = false, title, description, children, footer, onClose, icon, className = '', ...rest }) {
  if (!open) return null;
  return (
    <div className="pr-dialog__scrim" onClick={onClose}>
      <div className={('pr-dialog ' + className).trim()} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} {...rest}>
        <div className="pr-dialog__head">
          {icon ? <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--blue-50)', color: 'var(--brand-primary)', display: 'grid', placeItems: 'center', flex: 'none' }}><Icon name={icon} size={19} /></span> : null}
          <div style={{ flex: 1 }}>
            {title ? <h3 className="pr-dialog__title">{title}</h3> : null}
            {description ? <p className="pr-dialog__desc">{description}</p> : null}
          </div>
          {onClose ? <button className="pr-alert__close" type="button" aria-label="Close" onClick={onClose}><Icon name="x" size={17} /></button> : null}
        </div>
        {children ? <div className="pr-dialog__body">{children}</div> : <div style={{ height: 'var(--space-5)' }} />}
        {footer ? <div className="pr-dialog__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
