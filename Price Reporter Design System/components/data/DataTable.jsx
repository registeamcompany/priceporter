import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function DataTable({
  columns = [], rows = [], compact = false, striped = false,
  footer, onSort, sortKey, className = '', ...rest
}) {
  return (
    <div className={('pr-table-wrap ' + className).trim()} {...rest}>
      <table className={['pr-table', compact ? 'pr-table--compact' : '', striped ? 'pr-table--striped' : ''].filter(Boolean).join(' ')}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} data-align={c.align} style={c.width ? { width: c.width } : undefined}>
                {c.sortable && onSort ? (
                  <button className="pr-table__sort" type="button" onClick={() => onSort(c.key)}>
                    {c.label}<Icon name={sortKey === c.key ? 'arrow-down' : 'chevrons-up-down'} size={12} />
                  </button>
                ) : c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id != null ? r.id : i}>
              {columns.map((c) => (
                <td key={c.key} data-align={c.align} className={c.strong ? 'pr-table__strong' : undefined}>
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footer ? <div className="pr-table__foot">{footer}</div> : null}
    </div>
  );
}
