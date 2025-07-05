import { useNavigationContext } from "@/contexts/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import type { ReactElement } from "react";

const HeaderBurgerMenu = (): ReactElement => {
  const { toggleNavMenu, isNavMenuOpen } = useNavigationContext();
  const Icon = isNavMenuOpen ? IconX : IconMenu2;
  return (
    <button
      aria-label="Toggle navigation menu"
      className="action-icon md:invisible visible"
      onClick={toggleNavMenu}
      type="button"
    >
      <Icon aria-hidden="true" stroke={1.5} />
    </button>
  );
};

export default HeaderBurgerMenu;
