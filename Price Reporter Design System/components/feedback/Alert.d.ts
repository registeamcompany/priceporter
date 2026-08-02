import * as React from 'react';

/**
 * Inline status message.
 * @startingPoint section="Feedback" subtitle="Alerts, tooltips and dialogs" viewport="700x330"
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Shows a dismiss button when provided. */
  onClose?: (e: React.MouseEvent) => void;
  /** Overrides the tone's default icon. */
  icon?: string;
}

export declare function Alert(props: AlertProps): JSX.Element;
