import type { NavigationLinkButton } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactElement } from "react";
import clsx from "clsx";
import styles from "./navbarlink.module.css";

const NavBarLink = ({
  label,
  href,
  icon: Icon,
}: NavigationLinkButton): ReactElement => {
  const pathname = usePathname();
  return (
    <Link
      className={clsx(
        "group gap-x-3 rounded-md px-4 py-2 text-sm focus-visible:outline-blue-600 flex items-center focus-visible:outline-2 focus-visible:outline-offset-2",
        styles["nav-bar-link"],
      )}
      data-active={pathname === href}
      href={href}
    >
      <Icon
        aria-hidden="true"
        className="text-current"
        size={16}
        stroke={1.5}
      />
      {label}
    </Link>
  );
};

export default NavBarLink;
