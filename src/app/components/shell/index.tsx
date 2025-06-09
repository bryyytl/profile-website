"use client";

import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useNavigationContext } from "../../common/contexts/navigation";
import useDetectMobileBreakpoint from "../../hooks/useDetectMobileBreakpoint";
import Footer from "./footer";
import Header from "./header";
import NavBar from "./nav-bar";

const ShellLayout = ({ children }: PropsWithChildren) => {
  const isMobileBreakpoint = useDetectMobileBreakpoint();
  const { isNavMenuOpen } = useNavigationContext();

  return (
    <AppShell
      footer={{ height: 60 }}
      header={{ height: 60 }}
      navbar={{
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !isNavMenuOpen },
        width: 300,
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main hidden={isNavMenuOpen && isMobileBreakpoint}>
        {children}
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default ShellLayout;
