import { ActionIcon, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import ModeButton from "./mode-button";

const Header = () => {
  return (
    <Group justify="flex-end" p="md">
      {/* <Anchor c="var(--text-primary)" component={Link} href="/" target="_blank">
        Home
      </Anchor> */}
      <Group gap="sm">
        <ActionIcon
          aria-label="Navigate to GitHub"
          component={Link}
          href="https://github.com/bryyytl"
          radius="md"
          size="lg"
          variant="default"
        >
          <IconBrandGithub />
        </ActionIcon>
        <ActionIcon
          aria-label="Navigate to LinkedIn"
          component={Link}
          href="https://www.linkedin.com/in/bryan-laporte/"
          radius="md"
          size="lg"
          variant="default"
        >
          <IconBrandLinkedin />
        </ActionIcon>
        <ModeButton />
      </Group>
    </Group>
  );
};

export default Header;
