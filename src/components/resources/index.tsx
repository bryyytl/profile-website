import { Container, Title } from "@mantine/core";
import type { ReactElement } from "react";
import ResourceCollection from "./resource-collection";
import ResourceFilters from "./resource-filters";

const Resources = (): ReactElement => {
  return (
    <Container my="xl" size="sm">
      <div className="gap-4 w-inherit flex flex-col items-stretch justify-start">
        <Title order={1}>Personal Resource Collection</Title>
        <p className="text-[var(--mantine-color-dimmed)]">
          A collection of some of my favorite references, resources, and other
          miscellaneous things of interest.
        </p>
        <p className="font-medium text-sm inline-block">Filter by topic</p>
        <ResourceFilters />
        <Title order={3}>Matching Results</Title>
        <ResourceCollection />
      </div>
    </Container>
  );
};

export default Resources;
