import { navigationLinkButtons } from "@/constants/navigation";
import HeaderBurgerMenu from "./header-burger-menu";
import HeaderNavButton from "./header-nav-button";
import ModeButton from "./mode-button";

const Header = () => {
  return (
    <div className="gap-2 px-4 flex h-full items-center justify-between">
      <HeaderBurgerMenu />
      <div className="gap-2 flex flex-auto justify-end">
        <div className="gap-2 md:visible invisible flex">
          {navigationLinkButtons.map((navLinkButton) => (
            <HeaderNavButton {...navLinkButton} key={navLinkButton.label} />
          ))}
        </div>
        <ModeButton />
      </div>
    </div>
  );
};

export default Header;
