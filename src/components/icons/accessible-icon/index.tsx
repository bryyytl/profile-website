import type { SVGProps, ReactElement } from "react";

const AccessibleIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
      <path d="m10 16.5l2-3l2 3m-2-3v-2l3-1m-6 0l3 1" />
      <circle cx="12" cy="7.5" fill="currentColor" r=".5" />
    </g>
  </svg>
);

export default AccessibleIcon;
