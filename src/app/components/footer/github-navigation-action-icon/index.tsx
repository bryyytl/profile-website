import { ActionIcon, Tooltip } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactElement } from "react";

const GitHubNavigationActionIcon = (): ReactElement => {
  return (
    <Tooltip label="Navigate to GitHub">
      <ActionIcon
        aria-label="Navigate to GitHub"
        component={Link}
        href="https://github.com/bryyytl"
      >
        <IconBrandGithub />
      </ActionIcon>
    </Tooltip>
  );
};

export default GitHubNavigationActionIcon;
