import { useContext } from "react";
import type { ResourceFilterContextValue } from "./context";
import ResourceFilterContext from "./context";

const useResourceFilterContext = (): ResourceFilterContextValue => {
  const context = useContext(ResourceFilterContext);

  if (context === undefined) {
    throw new Error(
      "useResourceFilterContext must be used within a ResourceFilterProvider",
    );
  }

  return context;
};

export default useResourceFilterContext;
