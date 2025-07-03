import { useNavigationContext } from "@/contexts/navigation";
import { Burger } from "@mantine/core";
import type { ReactElement } from "react";

const HeaderBurgerMenu = (): ReactElement => {
  const { toggleNavMenu, isNavMenuOpen } = useNavigationContext();
  return (
    <Burger
      hiddenFrom="sm"
      onClick={toggleNavMenu}
      opened={isNavMenuOpen}
      size="sm"
    />
  );
};

export default HeaderBurgerMenu;
