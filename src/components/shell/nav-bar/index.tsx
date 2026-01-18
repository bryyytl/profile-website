import { navigationLinkButtons } from "@/constants/navigation";
import type { ReactElement } from "react";
import NavBarLink from "./nav-bar-link";

const NavBar = (): ReactElement => {
  return (
    <ul className="space-y-4 px-2 py-4 overflow-auto">
      {navigationLinkButtons.map((navLinkButton) => (
        <li key={navLinkButton.label}>
          <NavBarLink {...navLinkButton} />
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
