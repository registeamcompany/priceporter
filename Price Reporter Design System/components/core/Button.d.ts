import * as React from 'react';

/**
 * PriceReporter action button.
 * @startingPoint section="Core" subtitle="Buttons, icon buttons, badges and tags" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /**
   * accent = solid orange (the site's GET CONSULTATION), outline-accent = white with orange border
   * and orange caps text (the site's LEARN MORE), outline-accent-dark = same on navy,
   * primary = solid brand blue, secondary = blue outline, ghost/link = low emphasis.
   */
  variant?: 'accent' | 'outline-accent' | 'outline-accent-dark' | 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Icon name from assets/icons/. */
  iconLeft?: string;
  iconRight?: string;
  fullWidth?: boolean;
  /** Inverts the secondary variant for navy sections. */
  onDark?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
}

export declare function Button(props: ButtonProps): JSX.Element;
