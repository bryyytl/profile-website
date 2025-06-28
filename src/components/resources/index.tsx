import { Container } from "@mantine/core";
import type { ReactElement } from "react";
import ResourceCollection from "./resource-collection";
import ResourceFilters from "./resource-filters";

const Resources = (): ReactElement => {
  return (
    <Container my="xl" size="sm">
      <div className="gap-4 w-inherit flex flex-col items-stretch justify-start">
        <h1 className="font-medium text-4xl">Personal Resource Collection</h1>
        <p className="text-[var(--mantine-color-dimmed)]">
          A collection of some of my favorite references, resources, and other
          miscellaneous things of interest.
        </p>
        <p className="font-medium text-sm inline-block">Filter by topic</p>
        <ResourceFilters />
        <h3 className="font-medium text-xl">Matching Results</h3>
        <ResourceCollection />
      </div>
    </Container>
  );
};

export default Resources;
