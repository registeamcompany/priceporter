import * as React from 'react';

export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  /** Bold lead-in inside the quote — on the site this is always "Price Reporter". */
  brand?: string;
  name?: string;
  role?: string;
  company?: string;
  /** Client logo URL, shown on a white plate at the left. Falls back to the company name in type. */
  logo?: string;
  moreHref?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export declare function Testimonial(props: TestimonialProps): JSX.Element;
