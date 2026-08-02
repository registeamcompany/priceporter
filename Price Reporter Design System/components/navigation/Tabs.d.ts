import * as React from 'react';

export interface TabItem { id: string; label: React.ReactNode; icon?: string; count?: number | string }

/**
 * Tab strip.
 * @startingPoint section="Navigation" subtitle="Tabs, FAQ accordion and breadcrumbs" viewport="700x340"
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: TabItem[];
  /** Controlled active id; defaults to the first item. */
  value?: string;
  onChange?: (id: string) => void;
  /** underline = page/section tabs; pill = compact in-app segmented control. */
  variant?: 'underline' | 'pill';
}

export declare function Tabs(props: TabsProps): JSX.Element;
