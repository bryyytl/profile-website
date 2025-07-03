import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactElement } from "react";

const LinkedInNavigationActionIcon = (): ReactElement => {
  return (
    <Link
      aria-label="Navigate to LinkedIn profile"
      className="action-icon"
      href="https://www.linkedin.com/in/bryan-laporte/"
    >
      <IconBrandLinkedin aria-hidden="true" />
    </Link>
  );
};

export default LinkedInNavigationActionIcon;
