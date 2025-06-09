import { Anchor, List, Stack, Title, Text, Container } from "@mantine/core";
import type { ReactElement } from "react";
import resourceCollection from "./resourcecollection";

const ResourcesList = (): ReactElement => {
  return (
    <Container my="xl" size="sm">
      <Stack>
        <Title order={1}>Personal Resource Collection</Title>
        <Text c="dimmed">
          A collection of some of my favorite references, resources, and other
          miscellaneous things of interest.
        </Text>
        <Stack gap="xl">
          {resourceCollection.map(({ title, items }) => (
            <Stack key={title}>
              <Title order={2}>{title}</Title>
              <List>
                {items.map(({ href, description }) => (
                  <List.Item key={description}>
                    <Anchor href={href} target="_blank">
                      {description}
                    </Anchor>
                  </List.Item>
                ))}
              </List>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ResourcesList;
