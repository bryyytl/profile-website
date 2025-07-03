import { ElementType } from "react";
import { IconHome, IconLink } from "@tabler/icons-react";

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
  // {
  //   href: "/blog/",
  //   icon: IconArticle,
  //   label: "Blog",
  // },
  {
    href: "/resources/",
    icon: IconLink,
    label: "Resources",
  },
];
