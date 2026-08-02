import * as React from 'react';

/**
 * The site's one section-heading pattern: centered, UPPERCASE, Instrument Sans Bold in #085185.
 * @startingPoint section="Surfaces" subtitle="Headings, service columns, stats, tiles and bands" viewport="700x420"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Small uppercase ORANGE kicker above the title. Use sparingly — the live site rarely does. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** center (default, matches the site) or left for article/app contexts. */
  align?: 'center' | 'left';
  /** true (default) = UPPERCASE section heading; false = sentence-case display heading (hero only). */
  caps?: boolean;
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;

export interface BoxedHeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Title that breaks the top border of the navy keyline box. */
  title: React.ReactNode;
  children?: React.ReactNode;
}

export declare function BoxedHeading(props: BoxedHeadingProps): JSX.Element;
