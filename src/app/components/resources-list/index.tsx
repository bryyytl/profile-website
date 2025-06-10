import {
  Anchor,
  List,
  Stack,
  Title,
  Text,
  Container,
  Input,
} from "@mantine/core";
import { useState } from "react";
import type { ReactElement } from "react";
import { resourceCollectionList } from "./resourcecollection";
import type { ResourceItemMetatag } from "./resourcecollection";
import ResourceFilters from "./resource-filters";

const ResourcesList = (): ReactElement => {
  const [filterValue, setFilterValue] = useState<ResourceItemMetatag | null>(
    null,
  );

  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === filterValue) setFilterValue(null);
  };

  return (
    <Container my="xl" size="sm">
      <Stack>
        <Title order={1}>Personal Resource Collection</Title>
        <Text c="dimmed">
          A collection of some of my favorite references, resources, and other
          miscellaneous things of interest.
        </Text>
        <Input.Label>Filter by topic</Input.Label>
        <ResourceFilters
          filterValue={filterValue}
          handleChipClick={handleChipClick}
          setFilterValue={setFilterValue}
        />
        <Title order={3}>Matching Results</Title>
        <List withPadding>
          {resourceCollectionList
            .filter(
              (item) =>
                filterValue === null || item.metatags.includes(filterValue),
            )
            .map(({ href, description }) => (
              <List.Item key={description}>
                <Anchor href={href} target="_blank">
                  {description}
                </Anchor>
              </List.Item>
            ))}
        </List>
      </Stack>
    </Container>
  );
};

export default ResourcesList;
