import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Accordion({ items = [], defaultOpen, allowMultiple = false, className = '', ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen != null ? [defaultOpen] : []);
  const toggle = (id) => setOpen((cur) =>
    cur.includes(id) ? cur.filter((x) => x !== id) : allowMultiple ? [...cur, id] : [id]);
  return (
    <div className={('pr-acc ' + className).trim()} {...rest}>
      {items.map((it) => {
        const isOpen = open.includes(it.id);
        return (
          <div className="pr-acc__item" key={it.id} data-open={isOpen ? 'true' : undefined}>
            <button className="pr-acc__btn" type="button" aria-expanded={isOpen} onClick={() => toggle(it.id)}>
              <Icon className="pr-acc__chev" name="chevron-right" size={22} />
              <span>{it.question}</span>
            </button>
            {isOpen ? <div className="pr-acc__panel">{it.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
