import type { ReactElement } from "react";
import { skillCards } from "./constants";
import SkillsCard from "./skills-card";

const SkillsCards = (): ReactElement => {
  return (
    <ul className="gap-4 md:grid-cols-2 max-w-800 mx-auto grid grid-cols-1">
      {skillCards.map(({ title, listItems }) => (
        <li className="col-span-1" key={title}>
          <SkillsCard listItems={listItems} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default SkillsCards;
