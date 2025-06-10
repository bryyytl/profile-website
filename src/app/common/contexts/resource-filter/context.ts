import { createContext } from "react";
import { ResourceItemMetatag } from "../../constants/resourceFilterCollection";
import type { MouseEvent } from "react";

export interface ResourceFilterContextValue {
  filterValue: ResourceItemMetatag | null;
  handleChipClick: (event: MouseEvent<HTMLInputElement>) => void;
  setFilterValue: (value: ResourceItemMetatag | null) => void;
}

const ResourceFilterContext = createContext<
  ResourceFilterContextValue | undefined
>(undefined);

export default ResourceFilterContext;
