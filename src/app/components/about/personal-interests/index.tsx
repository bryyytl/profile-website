import { SimpleGrid, Stack, Title } from "@mantine/core";
import type { ReactElement } from "react";
import { personalInterestCards } from "./constants";
import PersonalInterestCard from "./personal-interest-card";

const PersonalInterests = (): ReactElement => {
  return (
    <Stack>
      <Title order={3}>Personal Interests</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
        {personalInterestCards.map(({ icon, title, description }) => (
          <PersonalInterestCard
            description={description}
            icon={icon}
            key={title}
            title={title}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PersonalInterests;
