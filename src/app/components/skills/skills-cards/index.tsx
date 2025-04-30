import { SimpleGrid } from "@mantine/core";
import type { ReactElement } from "react";
import { skillCards } from "./constants";
import SkillsCard from "./skills-card";

const SkillsCards = (): ReactElement => {
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} m="0 auto" maw={800}>
      {skillCards.map(({ title, listItems }) => (
        <SkillsCard key={title} listItems={listItems} title={title} />
      ))}
    </SimpleGrid>
  );
};

export default SkillsCards;
