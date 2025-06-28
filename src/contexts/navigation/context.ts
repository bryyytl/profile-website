import { createContext } from "react";

export interface NavigationContextValue {
  isNavMenuOpen: boolean;
  toggleNavMenu: () => void;
}

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined,
);

export default NavigationContext;
