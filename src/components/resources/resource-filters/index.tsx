import { resourceItemMetatags } from "@/constants/resourceFilterCollection";
import { useResourceFilterContext } from "@/contexts/resource-filter";
import { Chip } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import type { ReactElement } from "react";

const ResourceFilters = (): ReactElement => {
  const { handleChipClick, filterValue, setFilterValue } =
    useResourceFilterContext();

  return (
    <Chip.Group
      multiple={false}
      onChange={setFilterValue as (value: string | null) => void}
      value={filterValue}
    >
      <div className="mb-4 max-w-928 mx-auto flex flex-wrap items-center justify-start gap-[10px]">
        {[...resourceItemMetatags]
          .sort((a, b) =>
            a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()),
          )
          .map((resourceItemMetatag) => (
            <Chip
              icon={<IconX size={16} />}
              key={resourceItemMetatag}
              onClick={handleChipClick}
              tt="capitalize"
              value={resourceItemMetatag}
            >
              {resourceItemMetatag}
            </Chip>
          ))}
      </div>
    </Chip.Group>
  );
};

export default ResourceFilters;
