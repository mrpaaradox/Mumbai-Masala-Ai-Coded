import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M13.5 21v-7h2.3l.4-3h-2.7V9c0-.9.3-1.5 1.6-1.5H16V5.1C15.7 5 14.9 5 14 5c-2.4 0-4 1.3-4 3.8V11H8v3h2v7h3.5Z"
      fill="currentColor"
    />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="5"
      ry="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" />
  </svg>
);

export const TwitterIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M19.5 7.5a4.1 4.1 0 0 1-1.9.5 2.9 2.9 0 0 0 1.3-1.7 4 4 0 0 1-2.1.8 3 3 0 0 0-5.2 2v.5A8.3 8.3 0 0 1 6 6.5s-3 6 3.5 8.5a8.7 8.7 0 0 1-4.9 1.3c6.5 3.5 14 0 14-8.1v-.2Z"
      fill="currentColor"
    />
  </svg>
);

export const YouTubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect
      x="3"
      y="7"
      width="18"
      height="10"
      rx="3"
      ry="3"
      fill="currentColor"
    />
    <path d="m11 10 4 2-4 2v-4Z" fill="#f9fafb" />
  </svg>
);

