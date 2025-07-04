import type { PropsWithChildren, ReactElement } from "react";
import { useMemo, useState, useCallback } from "react";
import type { ResourceFilterContextValue } from "./context";
import ResourceFilterContext from "./context";
import type { ChangeEvent } from "react";
import type { ResourceItemMetatag } from "@/constants/resourceFilterCollection";

const ResourceFilterProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [filterValue, setFilterValue] = useState<ResourceItemMetatag | null>(
    null,
  );

  const handleChipClick = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setFilterValue((prevFilter) =>
        prevFilter === value ? null : (value as ResourceItemMetatag),
      );
    },
    [],
  );

  const value: ResourceFilterContextValue = useMemo(
    () => ({
      filterValue,
      handleChipClick,
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
