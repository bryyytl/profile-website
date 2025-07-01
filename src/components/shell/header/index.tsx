import { navigationLinkButtons } from "@/constants/navigation";
import { Group } from "@mantine/core";
import HeaderBurgerMenu from "./header-burger-menu";
import HeaderNavButton from "./header-nav-button";
import ModeButton from "./mode-button";

const Header = () => {
  return (
    <Group gap="xs" justify="space-between" p="md">
      <HeaderBurgerMenu />
      <Group flex="auto" gap="xs" justify="flex-end">
        <Group gap="xs" visibleFrom="sm">
          {navigationLinkButtons.map((navLinkButton) => (
            <HeaderNavButton {...navLinkButton} key={navLinkButton.label} />
          ))}
        </Group>
        <ModeButton />
      </Group>
    </Group>
  );
};

export default Header;
