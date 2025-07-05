import type { NavigationLinkButton } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";

const HeaderNavButton = ({
  href,
  label,
}: NavigationLinkButton): ReactElement => {
  const pathname = usePathname();
  return (
    <Link
      className="header-nav-button"
      data-active={pathname === href}
      href={href}
    >
      {label}
    </Link>
  );
};

export default HeaderNavButton;
