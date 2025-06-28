import { Burger, Group } from "@mantine/core";
import HeaderNavButton from "./header-nav-button";
import ModeButton from "./mode-button";
import { useNavigationContext } from "@/contexts/navigation";
import { navigationLinkButtons } from "@/constants/navigation";

const Header = () => {
  const { toggleNavMenu, isNavMenuOpen } = useNavigationContext();
  return (
    <Group gap="xs" justify="space-between" p="md">
      <Burger
        hiddenFrom="sm"
        onClick={toggleNavMenu}
        opened={isNavMenuOpen}
        size="sm"
      />
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
