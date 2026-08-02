import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ServiceCard({ icon, title, description, cta = 'Learn more', href = '#', className = '', ...rest }) {
  return (
    <a className={('pr-service ' + className).trim()} href={href} {...rest}>
      {icon ? <span className="pr-service__icon"><Icon name={icon} size={22} /></span> : null}
      <h3 className="pr-service__title">{title}</h3>
      <span className="pr-service__rule" />
      <p className="pr-service__desc">{description}</p>
      {cta ? <span className="pr-service__cta">{cta}</span> : null}
    </a>
  );
}
