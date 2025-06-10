import { Chip, Group } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import type { ReactElement } from "react";
import {
  ResourceItemMetatag,
  resourceItemMetatags,
} from "../resourcecollection";

interface ResourceFiltersProps {
  handleChipClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  filterValue: string | null;
  setFilterValue: (value: ResourceItemMetatag | null) => void;
}

const ResourceFilters = ({
  handleChipClick,
  setFilterValue,
  filterValue,
}: ResourceFiltersProps): ReactElement => {
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
