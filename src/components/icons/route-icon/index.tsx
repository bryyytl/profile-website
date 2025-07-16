import type { SVGProps, ReactElement } from "react";

const RouteIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" />
    <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
  </svg>
);

export default RouteIcon;
