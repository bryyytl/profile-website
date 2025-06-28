import { resourceCollectionList } from "@/constants/resourceFilterCollection";
import { useResourceFilterContext } from "@/contexts/resource-filter";
import { List } from "@mantine/core";
import Link from "next/link";
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
            <Link
              className="text-[var(--mantine-color-anchor)] hover:underline"
              href={href}
              target="_blank"
            >
              {description}
            </Link>
          </List.Item>
        ))}
    </List>
  );
};

export default ResourceCollection;
