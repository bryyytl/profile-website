import type { ReactElement } from "react";
import ResourceCollection from "./resource-collection";
import ResourceFilters from "./resource-filters";

const Resources = (): ReactElement => {
  return (
    <div className="px-4 max-w-3xl my-8 mx-auto">
      <div className="gap-4 w-inherit flex flex-col items-stretch justify-start">
        <h1 className="font-medium text-4xl">Personal Resource Collection</h1>
        <p className="text-[var(--mantine-color-dimmed)]">
          A collection of some of my favorite references, resources, and other
          miscellaneous things of interest.
        </p>
        <ResourceFilters />
        <h3 className="font-medium text-xl">Matching Results</h3>
        <ResourceCollection />
      </div>
    </div>
  );
};

export default Resources;
