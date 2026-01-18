import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";
import type { ReactElement } from "react";

const LinkedInNavigationActionIcon = (): ReactElement => {
  return (
    <Link
      aria-label="Navigate to LinkedIn profile"
      className="action-icon"
      href="https://www.linkedin.com/in/bryan-laporte/"
    >
      <LinkedInIcon aria-hidden="true" className="size-6 block" />
    </Link>
  );
};

export default LinkedInNavigationActionIcon;
