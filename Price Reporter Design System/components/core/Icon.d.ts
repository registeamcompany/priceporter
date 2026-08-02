import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** File name (without .svg) of a glyph in assets/icons/ — e.g. "shield-check". */
  name: string;
  /** Square px size. Use 16 inside controls, 20 default, 24+ for feature icons. */
  size?: number;
  /** Overrides currentColor. */
  color?: string;
  /** Path to the icon folder; defaults to window.PR_ICON_BASE or "assets/icons/". */
  base?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
