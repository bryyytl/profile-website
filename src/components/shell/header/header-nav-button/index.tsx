import type { NavigationLinkButton } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import clsx from "clsx";
import styles from "./headernavbutton.module.css";

const HeaderNavButton = ({
  href,
  label,
}: NavigationLinkButton): ReactElement => {
  const pathname = usePathname();
  return (
    <Link
      className={clsx(
        "rounded-md decoration-none px-3 py-2 text-sm font-medium focus-visible:outline-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2",
        styles["header-nav-button"],
      )}
      data-active={pathname === href}
      href={href}
    >
      {label}
    </Link>
  );
};

export default HeaderNavButton;
