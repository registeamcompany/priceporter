import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Testimonial({ quote, brand, name, role, company, logo, moreHref, onPrev, onNext, className = '', ...rest }) {
  return (
    <figure className={('pr-quote ' + className).trim()} style={{ margin: 0 }} {...rest}>
      <div className="pr-quote__inner">
        <div className="pr-quote__plate">
          {logo ? <img src={logo} alt={company || ''} /> : <span style={{ font: 'var(--type-h3)', color: 'var(--blue-900)', textAlign: 'center' }}>{company}</span>}
        </div>
        <div className="pr-quote__body">
          <h2 className="pr-quote__title">Testimonials</h2>
          <blockquote className="pr-quote__text" style={{ margin: 0 }}>
            {brand ? <strong>{brand}</strong> : null}{brand ? ' ' : null}{quote}
          </blockquote>
          <figcaption className="pr-quote__who">{[name, role, company].filter(Boolean).join(', ')}</figcaption>
        </div>
      </div>
      {(moreHref || onPrev || onNext) ? (
        <div className="pr-quote__foot">
          {moreHref ? <a className="pr-quote__more" href={moreHref}><Icon name="chevron-right" size={16} />More testimonials</a> : <span />}
          <span className="pr-quote__nav">
            <button type="button" aria-label="Previous" onClick={onPrev} style={{ background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}><Icon name="chevron-left" size={20} /></button>
            <button type="button" aria-label="Next" onClick={onNext} style={{ background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}><Icon name="chevron-right" size={20} /></button>
          </span>
        </div>
      ) : null}
    </figure>
  );
}
