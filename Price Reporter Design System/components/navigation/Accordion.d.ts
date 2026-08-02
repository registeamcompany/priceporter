import * as React from 'react';

export interface AccordionItem { id: string; question: React.ReactNode; answer: React.ReactNode }

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
  /** Id of the row open on first render. */
  defaultOpen?: string;
  /** Allow several rows open at once. Default: single. */
  allowMultiple?: boolean;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
