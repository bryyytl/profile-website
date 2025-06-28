import { NavLink, ScrollArea } from "@mantine/core";
import type { ReactElement } from "react";
import { usePathname } from "next/navigation";
import { navigationLinkButtons } from "@/constants/navigation";

const NavBar = (): ReactElement => {
  const pathname = usePathname();
  return (
    <ScrollArea>
      <div className="gap-4 px-1 py-4 flex flex-col items-stretch justify-start">
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
    </ScrollArea>
  );
};

export default NavBar;
