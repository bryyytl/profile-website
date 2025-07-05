import type { ResourceItemMetatag } from "@/constants/resourceFilterCollection";
import { useResourceFilterContext } from "@/contexts/resource-filter";
import type { ReactElement } from "react";

interface ResourceFilterItemProps {
  resourceItemMetatag: ResourceItemMetatag;
}

const ResourceFilterItem = ({
  resourceItemMetatag,
}: ResourceFilterItemProps): ReactElement => {
  const { handleChipClick, filterValue } = useResourceFilterContext();
  return (
    <label
      aria-label={resourceItemMetatag}
      className="group rounded-xl px-4 py-1 resource-filter-item relative flex items-center justify-center border border-transparent"
      data-checked={filterValue === resourceItemMetatag}
    >
      <input
        checked={filterValue === resourceItemMetatag}
        className="inset-0 focus-visible:none absolute cursor-pointer appearance-none"
        name="metatag"
        onChange={handleChipClick}
        type="checkbox"
        value={resourceItemMetatag}
      />
      <span className="text-sm capitalize">{resourceItemMetatag}</span>
    </label>
  );
};

export default ResourceFilterItem;
