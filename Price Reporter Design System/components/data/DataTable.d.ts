import * as React from 'react';

export interface DataTableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  /** Any CSS width, e.g. "18%" or 120. */
  width?: string | number;
  /** Renders the value in medium weight / near-black. */
  strong?: boolean;
  sortable?: boolean;
  /** Custom cell renderer — use for Badges, actions, links. */
  render?: (row: Row) => React.ReactNode;
}

/**
 * Bordered data table for orders, catalogs and contract line items.
 * @startingPoint section="Data" subtitle="Order and catalog tables" viewport="700x300"
 */
export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: DataTableColumn[];
  rows?: any[];
  compact?: boolean;
  striped?: boolean;
  /** Grey bar under the table — counts, pagination. */
  footer?: React.ReactNode;
  onSort?: (key: string) => void;
  sortKey?: string;
}

export declare function DataTable(props: DataTableProps): JSX.Element;
