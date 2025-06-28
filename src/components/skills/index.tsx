import SkillsCards from "./skills-cards";

const Skills = () => (
  <div className="gap-3 p-4 flex flex-col items-stretch justify-start">
    <h2 className="font-medium mb-3 md:mb-5 text-2xl md:text-3xl text-center">
      What I Do
    </h2>
    <SkillsCards />
  </div>
);

export default Skills;
