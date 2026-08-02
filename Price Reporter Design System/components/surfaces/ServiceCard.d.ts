import * as React from 'react';

export interface ServiceCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Optional icon name from assets/icons/ — rendered white on a blue square. Off-pattern for the marketing site. */
  icon?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  /** Button text; pass null to hide the outlined CTA. */
  cta?: React.ReactNode;
  href?: string;
}

export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
