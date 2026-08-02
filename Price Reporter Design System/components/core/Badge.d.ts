import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger';
  variant?: 'soft' | 'solid';
  /** Optional 12px leading icon. */
  icon?: string;
}

export declare function Badge(props: BadgeProps): JSX.Element;
