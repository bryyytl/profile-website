import { ElementType } from "react";
import {
  HomeIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

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
  {
    href: "/tools/",
    icon: WrenchScrewdriverIcon,
    label: "Tools",
  },
];
