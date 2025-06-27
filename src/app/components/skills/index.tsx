import { Title } from "@mantine/core";
import SkillsCards from "./skills-cards";

const Skills = () => (
  <div className="gap-3 p-4 flex flex-col items-stretch justify-start">
    <Title mb="lg" order={2} ta="center">
      What I Do
    </Title>
    <SkillsCards />
  </div>
);

export default Skills;
