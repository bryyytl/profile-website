import { ResourceItemMetatag } from "@/constants/resourceFilterCollection";
import { createContext } from "react";
import type { ChangeEvent } from "react";

export interface ResourceFilterContextValue {
  filterValue: ResourceItemMetatag | null;
  handleChipClick: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ResourceFilterContext = createContext<
  ResourceFilterContextValue | undefined
>(undefined);

export default ResourceFilterContext;
