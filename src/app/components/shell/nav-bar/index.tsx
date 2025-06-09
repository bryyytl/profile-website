import { NavLink, Stack } from "@mantine/core";
import type { ReactElement } from "react";
import { navigationLinkButtons } from "@/app/common/constants/navigation";
import { usePathname } from "next/navigation";

const NavBar = (): ReactElement => {
  const pathname = usePathname();
  return (
    <Stack px="xs" py="md">
      {navigationLinkButtons.map(({ label, href, icon: Icon }) => (
        <NavLink
          active={pathname === href}
          href={href}
          key={label}
          label={label}
          leftSection={<Icon size={16} stroke={1.5} />}
          variant="subtle"
        />
      ))}
    </Stack>
  );
};

export default NavBar;
