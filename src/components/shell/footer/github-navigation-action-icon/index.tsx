import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactElement } from "react";

const GitHubNavigationActionIcon = (): ReactElement => {
  return (
    <Link
      aria-label="Navigate to GitHub"
      className="action-icon"
      href="https://github.com/bryyytl"
    >
      <IconBrandGithub aria-hidden="true" />
    </Link>
  );
};

export default GitHubNavigationActionIcon;
