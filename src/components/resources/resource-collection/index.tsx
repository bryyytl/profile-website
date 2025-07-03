import { resourceCollectionList } from "@/constants/resourceFilterCollection";
import { useResourceFilterContext } from "@/contexts/resource-filter";
import Link from "next/link";
import type { ReactElement } from "react";

const ResourceCollection = (): ReactElement => {
  const { filterValue } = useResourceFilterContext();
  return (
    <ul className="px-4 list-inside list-disc">
      {resourceCollectionList
        .filter(
          (item) => filterValue === null || item.metatags.includes(filterValue),
        )
        .map(({ href, description }) => (
          <li key={description}>
            <Link
              className="text-[var(--mantine-color-anchor)] hover:underline"
              href={href}
              target="_blank"
            >
              {description}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ResourceCollection;
