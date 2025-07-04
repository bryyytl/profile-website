import { resourceItemMetatags } from "@/constants/resourceFilterCollection";
import type { ReactElement } from "react";
import ResourceFilterItem from "./resource-filter-item";

const ResourceFilters = (): ReactElement => {
  return (
    <fieldset aria-label="Filter by topic">
      <p className="font-medium mb-4 text-sm inline-block">Filter by topic</p>
      <div className="mb-4 max-w-928 mx-auto flex flex-wrap items-center justify-start gap-[10px]">
        {[...resourceItemMetatags]
          .sort((a, b) =>
            a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()),
          )
          .map((resourceItemMetatag) => (
            <ResourceFilterItem
              key={resourceItemMetatag}
              resourceItemMetatag={resourceItemMetatag}
            />
          ))}
      </div>
    </fieldset>
  );
};

export default ResourceFilters;
