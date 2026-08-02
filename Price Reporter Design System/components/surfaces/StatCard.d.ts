import * as React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Pre-formatted figure — "20+", "2.5M+", "4.9". */
  value: React.ReactNode;
  /** Navy bold label under the figure. */
  label: React.ReactNode;
  /** Optional leading icon tile (product UI only — the marketing site has none). */
  icon?: string;
  /** Icon rendered inline after the figure, e.g. "star" for a 4.9 rating. */
  suffixIcon?: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
  /** accent = orange figure (site default), brand = blue figure, inverse = on navy. */
  tone?: 'accent' | 'brand' | 'inverse';
  /** Adds a white bordered box — for in-product dashboards, not the marketing site. */
  boxed?: boolean;
}

export declare function StatCard(props: StatCardProps): JSX.Element;

export interface NumbersBandProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: StatCardProps[];
}

export declare function NumbersBand(props: NumbersBandProps): JSX.Element;
