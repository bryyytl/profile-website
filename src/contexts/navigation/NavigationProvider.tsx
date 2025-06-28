import { useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren, ReactElement } from "react";
import { useMemo } from "react";
import type { NavigationContextValue } from "./context";
import NavigationContext from "./context";

const NavigationProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [isNavMenuOpen, { toggle: toggleNavMenu }] = useDisclosure();

  const value: NavigationContextValue = useMemo(
    () => ({
      isNavMenuOpen,
      toggleNavMenu,
    }),
    [isNavMenuOpen, toggleNavMenu],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
