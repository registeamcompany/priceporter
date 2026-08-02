import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function StatCard({ value, label, icon, suffixIcon, trend, trendDirection = 'up', tone = 'accent', boxed = false, className = '', ...rest }) {
  const cls = ['pr-stat', tone !== 'accent' ? 'pr-stat--' + tone : '', boxed ? 'pr-stat--boxed' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {icon ? <span className="pr-stat__icon"><Icon name={icon} size={18} /></span> : null}
      <span className="pr-stat__value">{value}{suffixIcon ? <Icon name={suffixIcon} size={30} /> : null}</span>
      <span className="pr-stat__label">{label}</span>
      {trend ? (
        <span className="pr-stat__trend" data-dir={trendDirection}>
          <Icon name={trendDirection === 'down' ? 'arrow-down' : 'arrow-up'} size={13} />{trend}
        </span>
      ) : null}
    </div>
  );
}

/** The site's proof-point row: 7 orange figures with navy labels, inside a BoxedHeading. */
export function NumbersBand({ items = [], className = '', ...rest }) {
  return (
    <div className={('pr-numbers ' + className).trim()} {...rest}>
      {items.map((s) => <StatCard key={s.label} {...s} />)}
    </div>
  );
}
