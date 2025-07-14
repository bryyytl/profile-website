import { ElementType } from "react";
import { HomeIcon, LinkIcon } from "@heroicons/react/24/outline";

export interface NavigationLinkButton {
  href: string;
  label: string;
  icon: ElementType;
}

export const navigationLinkButtons: NavigationLinkButton[] = [
  {
    href: "/",
    icon: HomeIcon,
    label: "Home",
  },
  // {
  //   href: "/blog/",
  //   icon: NewspaperIcon,
  //   label: "Blog",
  // },
  {
    href: "/resources/",
    icon: LinkIcon,
    label: "Resources",
  },
];
