import * as React from 'react';

/**
 * Text input / textarea with label, hint and error slots.
 * @startingPoint section="Forms" subtitle="Inputs, selects, checkboxes and switches" viewport="700x340"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text below the control. Replaced by `error` when set. */
  hint?: string;
  error?: string;
  required?: boolean;
  /** Leading icon name from assets/icons/. */
  icon?: string;
  prefix?: string;
  suffix?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Renders a textarea instead of an input. */
  multiline?: boolean;
  /** White field with a bold blue placeholder — for the navy Contact Us block. */
  onDark?: boolean;
  disabled?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
