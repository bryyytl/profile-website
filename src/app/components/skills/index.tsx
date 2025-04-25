import { Group, Stack, Title, TypographyStylesProvider } from "@mantine/core";
import {
  IconBrandAws,
  IconBrandFigma,
  IconBrandHtml5,
  IconBrandReact,
  IconBrandSass,
  IconFileTypeJsx,
  IconFileTypeTsx,
} from "@tabler/icons-react";
import Markdown from "react-markdown";
import markdown from "./constants";
import SkillsCard from "./skills-card";

const Skills = () => {
  return (
    <Stack>
      <Title order={2}>My Top Skills</Title>
      <Group gap="md" maw={600}>
        <SkillsCard cardIcon={IconFileTypeJsx} />
        <SkillsCard cardIcon={IconFileTypeTsx} />
        <SkillsCard cardIcon={IconBrandReact} />
        <SkillsCard cardIcon={IconBrandSass} />
        <SkillsCard cardIcon={IconBrandHtml5} />
        <SkillsCard cardIcon={IconBrandAws} />
        <SkillsCard cardIcon={IconBrandFigma} />
      </Group>
      <TypographyStylesProvider>
        <Markdown>{markdown}</Markdown>
      </TypographyStylesProvider>
    </Stack>
  );
};

export default Skills;
