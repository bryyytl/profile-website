import { ActionIcon } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactElement } from "react";

const LinkedInNavigationActionIcon = (): ReactElement => {
  return (
    <ActionIcon
      aria-label="Navigate to LinkedIn profile"
      component={Link}
      href="https://www.linkedin.com/in/bryan-laporte/"
    >
      <IconBrandLinkedin />
    </ActionIcon>
  );
};

export default LinkedInNavigationActionIcon;
