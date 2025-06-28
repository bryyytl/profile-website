import { useContext } from "react";
import type { NavigationContextValue } from "./context";
import NavigationContext from "./context";

const useNavigationContext = (): NavigationContextValue => {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider",
    );
  }

  return context;
};

export default useNavigationContext;
