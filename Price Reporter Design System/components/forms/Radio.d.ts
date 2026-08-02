import * as React from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

export declare function Radio(props: RadioProps): JSX.Element;
