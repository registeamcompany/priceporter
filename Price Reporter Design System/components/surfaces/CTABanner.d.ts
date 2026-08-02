import * as React from 'react';

export interface CTABannerProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Usually one Button. */
  actions?: React.ReactNode;
  /** Inline content between the copy and the actions — e.g. the contact form row. */
  children?: React.ReactNode;
  tone?: 'navy' | 'accent' | 'soft';
}

export declare function CTABanner(props: CTABannerProps): JSX.Element;
