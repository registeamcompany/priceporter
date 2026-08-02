import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name from assets/icons/. */
  icon: string;
  /** Required accessible label (also used as the tooltip). */
  label: string;
  variant?: 'solid' | 'soft' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
