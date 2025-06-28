import { resourceCollectionList } from "@/constants/resourceFilterCollection";
import { useResourceFilterContext } from "@/contexts/resource-filter";
import { Anchor, List } from "@mantine/core";
import type { ReactElement } from "react";

const ResourceCollection = (): ReactElement => {
  const { filterValue } = useResourceFilterContext();
  return (
    <List listStyleType="disc" withPadding>
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
