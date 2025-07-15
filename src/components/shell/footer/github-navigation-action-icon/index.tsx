import GithubIcon from "@/components/icons/github-icon";
import Link from "next/link";
import type { ReactElement } from "react";

const GitHubNavigationActionIcon = (): ReactElement => {
  return (
    <Link
      aria-label="Navigate to GitHub"
      className="action-icon"
      href="https://github.com/bryyytl"
    >
      <GithubIcon aria-hidden="true" className="size-6 block" />
    </Link>
  );
};

export default GitHubNavigationActionIcon;
