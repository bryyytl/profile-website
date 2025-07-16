import type { SVGProps, ReactElement } from "react";

const BrandSpeedtestIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
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
    <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
    <path d="M16 9l-4 4" />
  </svg>
);

export default BrandSpeedtestIcon;
