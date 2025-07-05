import type { NavigationLinkButton } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactElement } from "react";

const NavBarLink = ({
  label,
  href,
  icon: Icon,
}: NavigationLinkButton): ReactElement => {
  const pathname = usePathname();
  return (
    <Link
      className="group gap-x-3 rounded-md px-4 py-2 text-sm focus-visible:outline-blue-600 nav-bar-link flex items-center focus-visible:outline-2 focus-visible:outline-offset-2"
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
