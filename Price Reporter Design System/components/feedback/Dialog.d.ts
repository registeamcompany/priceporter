import * as React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Action row on the grey footer, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Optional icon tile beside the title. */
  icon?: string;
}

export declare function Dialog(props: DialogProps): JSX.Element;
