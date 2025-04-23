import { SimpleGrid, Stack, Title } from "@mantine/core";
import SkillsCard from "./skills-card";

const Skills = () => {
  return (
    <Stack>
      <Title order={2}>My Top Skills</Title>
      <SimpleGrid cols={3}>
        <SkillsCard cardText={"1"} />
        <SkillsCard cardText={"2"} />
        <SkillsCard cardText={"3"} />
        <SkillsCard cardText={"4"} />
        <SkillsCard cardText={"5"} />
      </SimpleGrid>
    </Stack>
  );
};

export default Skills;
