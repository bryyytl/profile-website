import { navigationLinkButtons } from "@/constants/navigation";
import { NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";

const NavBar = (): ReactElement => {
  const pathname = usePathname();
  return (
    <div className="gap-4 px-1 py-4 flex flex-col items-stretch justify-start overflow-auto">
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
    </div>
  );
};

export default NavBar;
