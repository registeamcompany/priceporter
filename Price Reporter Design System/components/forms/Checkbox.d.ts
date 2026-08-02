import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Small grey line under the label. */
  description?: string;
  disabled?: boolean;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
