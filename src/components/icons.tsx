import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    {/* Circle container to better match brand mark */}
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M13.2 18.5v-5h1.7l.3-2.2h-2V9.4c0-.7.2-1.1 1.2-1.1h.9V6.4c-.4-.1-1-.2-1.8-.2-1.7 0-2.8.9-2.8 2.9v1.8H9v2.2h1.7v5h2.5Z"
      fill="#f9fafb"
    />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    {/* Outer rounded square */}
    <rect
      x="3.2"
      y="3.2"
      width="17.6"
      height="17.6"
      rx="5"
      ry="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    {/* Camera lens */}
    <circle
      cx="12"
      cy="12.2"
      r="3.4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    {/* Flash dot */}
    <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
  </svg>
);

export const TwitterIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    {/* X (Twitter) logo */}
    <path
      d="M5 4.5h3l3.1 4.2L14.8 4.5H19l-5.1 6.5L19 19.5h-3l-3.3-4.4-3.5 4.4H5l5.4-6.7L5 4.5Z"
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
    <path d="M11 10.2 14.4 12 11 13.8V10.2Z" fill="#f9fafb" />
  </svg>
);

