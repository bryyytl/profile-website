import { useNavigationContext } from "@/contexts/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import type { ReactElement } from "react";

const HeaderBurgerMenu = (): ReactElement => {
  const { toggleNavMenu, isNavMenuOpen } = useNavigationContext();
  const Icon = isNavMenuOpen ? XMarkIcon : Bars3Icon;
  return (
    <button
      aria-label="Toggle navigation menu"
      className="action-icon md:invisible visible"
      onClick={toggleNavMenu}
      type="button"
    >
      <Icon aria-hidden="true" className="size-6 block" />
    </button>
  );
};

export default HeaderBurgerMenu;
