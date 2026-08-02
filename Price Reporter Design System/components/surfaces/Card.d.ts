import * as React from 'react';

/**
 * Generic content container.
 * @startingPoint section="Surfaces" subtitle="Cards, stats, service tiles, quotes and CTA bands" viewport="700x420"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Small uppercase blue label above the title. */
  eyebrow?: string;
  title?: React.ReactNode;
  /** Divider-separated footer row (usually actions or metadata). */
  footer?: React.ReactNode;
  /** Image URL rendered full-bleed at 16:9 above the content. */
  media?: string;
  mediaAlt?: string;
  variant?: 'default' | 'sunken' | 'inverse';
  padding?: 'md' | 'lg';
  /** Adds the hover lift + pointer cursor. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export declare function Card(props: CardProps): JSX.Element;
