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
      className="rounded-md decoration-none px-3 py-2 text-sm font-medium focus-visible:outline-blue-600 header-nav-button focus-visible:outline-2 focus-visible:outline-offset-2"
      data-active={pathname === href}
      href={href}
    >
      {label}
    </Link>
  );
};

export default HeaderNavButton;
