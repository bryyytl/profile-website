import { useResourceFilterContext } from "@/contexts/resource-filter";
import clsx from "clsx";
import type { ReactElement } from "react";
import styles from "./resourcefilteritem.module.css";
import type { ResourceItemMetatag } from "@/constants/resourceFilterCollection";

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
      className={clsx(
        "group rounded-xl px-4 py-1 relative flex items-center justify-center border border-transparent",
        styles["resource-filter-item"],
      )}
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
