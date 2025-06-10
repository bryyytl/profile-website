import { useResourceFilterContext } from "@/app/common/contexts/resource-filter";
import { Chip, Group } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import type { ReactElement } from "react";
import { resourceItemMetatags } from "../../../common/constants/resourceFilterCollection";

const ResourceFilters = (): ReactElement => {
  const { handleChipClick, filterValue, setFilterValue } =
    useResourceFilterContext();

  return (
    <Chip.Group
      multiple={false}
      onChange={setFilterValue as (value: string | null) => void}
      value={filterValue}
    >
      <Group gap="xs" mb="md">
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
      </Group>
    </Chip.Group>
  );
};

export default ResourceFilters;
