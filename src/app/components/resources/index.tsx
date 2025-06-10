import { Container, Input, Stack, Text, Title } from "@mantine/core";
import type { ReactElement } from "react";
import ResourceCollection from "./resource-collection";
import ResourceFilters from "./resource-filters";

const Resources = (): ReactElement => {
  return (
    <Container my="xl" size="sm">
      <Stack>
        <Title order={1}>Personal Resource Collection</Title>
        <Text c="dimmed">
          A collection of some of my favorite references, resources, and other
          miscellaneous things of interest.
        </Text>
        <Input.Label>Filter by topic</Input.Label>
        <ResourceFilters />
        <Title order={3}>Matching Results</Title>
        <ResourceCollection />
      </Stack>
    </Container>
  );
};

export default Resources;
