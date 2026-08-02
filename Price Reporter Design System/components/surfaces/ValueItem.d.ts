import * as React from 'react';

export interface ValueItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bold black lead-in, e.g. "Founded in 2006", "Our Mission". */
  title: React.ReactNode;
  /** The sentence that continues the title. */
  children?: React.ReactNode;
}

export declare function ValueItem(props: ValueItemProps): JSX.Element;
