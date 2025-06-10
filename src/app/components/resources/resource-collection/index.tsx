import { useResourceFilterContext } from "@/app/common/contexts/resource-filter";
import { Anchor, List } from "@mantine/core";
import type { ReactElement } from "react";
import { resourceCollectionList } from "../../../common/constants/resourceFilterCollection";

const ResourceCollection = (): ReactElement => {
  const { filterValue } = useResourceFilterContext();
  return (
    <List withPadding>
      {resourceCollectionList
        .filter(
          (item) => filterValue === null || item.metatags.includes(filterValue),
        )
        .map(({ href, description }) => (
          <List.Item key={description}>
            <Anchor href={href} target="_blank">
              {description}
            </Anchor>
          </List.Item>
        ))}
    </List>
  );
};

export default ResourceCollection;
