import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'horizontal' | 'stacked' | 'mark';
  tone?: 'color' | 'mono';
  /** Rendered height in px. Minimum 24px for the horizontal lockup. */
  height?: number;
  /** Path to the assets folder; defaults to window.PR_ASSET_BASE or "assets/". */
  base?: string;
}

export declare function Logo(props: LogoProps): JSX.Element;
