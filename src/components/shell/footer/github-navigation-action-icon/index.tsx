import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactElement } from "react";

const GitHubNavigationActionIcon = (): ReactElement => {
  return (
    <ActionIcon
      aria-label="Navigate to GitHub"
      component={Link}
      href="https://github.com/bryyytl"
    >
      <IconBrandGithub />
    </ActionIcon>
  );
};

export default GitHubNavigationActionIcon;
