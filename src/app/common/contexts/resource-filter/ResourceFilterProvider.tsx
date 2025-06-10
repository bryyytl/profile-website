import type { PropsWithChildren, ReactElement } from "react";
import { useMemo, useState, useCallback } from "react";
import type { ResourceFilterContextValue } from "./context";
import ResourceFilterContext from "./context";
import { ResourceItemMetatag } from "../../constants/resourceFilterCollection";
import type { MouseEvent } from "react";

const ResourceFilterProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [filterValue, setFilterValue] = useState<ResourceItemMetatag | null>(
    null,
  );

  const handleChipClick = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      if (event.currentTarget.value === filterValue) setFilterValue(null);
    },
    [filterValue],
  );

  const value: ResourceFilterContextValue = useMemo(
    () => ({
      filterValue,
      handleChipClick,
      setFilterValue,
    }),
    [filterValue, handleChipClick],
  );

  return (
    <ResourceFilterContext.Provider value={value}>
      {children}
    </ResourceFilterContext.Provider>
  );
};

export default ResourceFilterProvider;
