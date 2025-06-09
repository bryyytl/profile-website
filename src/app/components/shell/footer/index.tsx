import { Group } from "@mantine/core";
import type { ReactElement } from "react";
import CopywriteText from "./copywrite-text";
import GitHubNavigationActionIcon from "./github-navigation-action-icon";
import LinkedInNavigationActionIcon from "./linkedin-navigation-action-icon";

const Footer = (): ReactElement => {
  return (
    <Group gap="md" justify="space-between" wrap="nowrap">
      <CopywriteText />
      <Group gap="xs" wrap="nowrap">
        <GitHubNavigationActionIcon />
        <LinkedInNavigationActionIcon />
      </Group>
    </Group>
  );
};

export default Footer;
