import * as React from 'react';

export interface LinkTileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: React.ReactNode;
  /** Blue depth: 1 #007CCE, 2 #005E9C, 3 #00416D — one depth per hero column. */
  depth?: 1 | 2 | 3;
  /** Larger group header tile with the speech-bubble tail. */
  head?: boolean;
  /** Small glyph in the top-left (the site uses a gear on "process" tiles). */
  icon?: string;
  /** Shows the play affordance in the top-right. */
  video?: boolean;
  href?: string;
}

export declare function LinkTile(props: LinkTileProps): JSX.Element;
