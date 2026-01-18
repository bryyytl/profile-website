import type { PropsWithChildren, ReactElement } from "react";
import { useCallback, useMemo, useState } from "react";
import type { NavigationContextValue } from "./context";
import NavigationContext from "./context";

const NavigationProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);

  const toggleNavMenu = useCallback(() => {
    setNavMenuOpen((prevNavMenuOpen) => !prevNavMenuOpen);
  }, []);

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
