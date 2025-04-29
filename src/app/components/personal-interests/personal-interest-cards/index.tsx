import { SimpleGrid } from "@mantine/core";
import type { ReactElement } from "react";
import { personalInterestCards } from "./constants";
import PersonalInterestCard from "./personal-interest-card";

const PersonalInterestCards = (): ReactElement => {
  return (
    <SimpleGrid cols={{ base: 1, md: 3, sm: 2 }} p="sm" spacing="md">
      {personalInterestCards.map(({ icon, title, description }) => (
        <PersonalInterestCard
          description={description}
          icon={icon}
          key={title}
          title={title}
        />
      ))}
    </SimpleGrid>
  );
};

export default PersonalInterestCards;
