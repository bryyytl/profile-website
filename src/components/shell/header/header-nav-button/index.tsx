import type { ReactElement } from "react";
import styles from "./headernavbutton.module.css";
import { Anchor } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationLinkButton } from "@/constants/navigation";

const HeaderNavButton = ({
  href,
  label,
}: NavigationLinkButton): ReactElement => {
  const pathname = usePathname();
  return (
    <Anchor
      className={styles["header-nav-button"]}
      component={Link}
      data-active={pathname === href}
      href={href}
    >
      {label}
    </Anchor>
  );
};

export default HeaderNavButton;
