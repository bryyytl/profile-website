import { Group, Stack, Title } from "@mantine/core";
import {
  IconBrandAws,
  IconBrandFigma,
  IconBrandHtml5,
  IconBrandReact,
  IconBrandSass,
  IconFileTypeJsx,
  IconFileTypeTsx,
} from "@tabler/icons-react";
import SkillsCard from "./skills-card";

const Skills = () => {
  return (
    <Stack>
      <Title order={2}>My Top Skills</Title>
      <Group gap="md" w={600}>
        <SkillsCard cardIcon={IconFileTypeJsx} />
        <SkillsCard cardIcon={IconFileTypeTsx} />
        <SkillsCard cardIcon={IconBrandReact} />
        <SkillsCard cardIcon={IconBrandSass} />
        <SkillsCard cardIcon={IconBrandHtml5} />
        <SkillsCard cardIcon={IconBrandAws} />
        <SkillsCard cardIcon={IconBrandFigma} />
      </Group>
    </Stack>
  );
};

export default Skills;
