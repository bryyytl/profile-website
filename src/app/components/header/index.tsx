import { ActionIcon, Anchor, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import ModeButton from "./mode-button";

const Header = () => {
  return (
    <Group p="md" justify="space-between">
      <Anchor component={Link} c="var(--text-primary)" href="/" target="_blank">
        Home
      </Anchor>
      <Group gap="sm">
        <ActionIcon
          component={Link}
          bd="xl"
          href="https://github.com/bryyytl"
          size="lg"
          variant="default"
          aria-label="Navigate to github"
        >
          <IconBrandGithub />
        </ActionIcon>
        <ActionIcon
          component={Link}
          bd="xl"
          href="https://www.linkedin.com/in/bryan-laporte/"
          size="lg"
          variant="default"
          aria-label="Navigate to LinkedIn"
        >
          <IconBrandLinkedin />
        </ActionIcon>
        <ModeButton />{" "}
      </Group>
    </Group>
  );
};

export default Header;
