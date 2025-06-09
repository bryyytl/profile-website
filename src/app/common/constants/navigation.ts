import { ElementType } from "react";
import { IconHome, IconBooks } from "@tabler/icons-react";

export interface NavigationLinkButton {
  href: string;
  label: string;
  icon: ElementType;
}

export const navigationLinkButtons: NavigationLinkButton[] = [
  {
    href: "/",
    icon: IconHome,
    label: "Home",
  },
  {
    href: "/resources/",
    icon: IconBooks,
    label: "Resources",
  },
];
