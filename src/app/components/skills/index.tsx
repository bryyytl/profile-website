import { Stack, Title } from "@mantine/core";
import SkillsCards from "./skills-cards";

const Skills = () => (
  <Stack gap="sm" p="md">
    <Title mb="lg" order={2} ta="center">
      What I Do
    </Title>
    <SkillsCards />
  </Stack>
);

export default Skills;
