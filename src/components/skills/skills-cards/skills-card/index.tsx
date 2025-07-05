import type { Skill } from "@/components/skills/skills-cards/constants";
import type { ReactElement } from "react";

const SkillsCard = ({ title, listItems }: Skill): ReactElement => {
  return (
    <div className="p-6 rounded-md shadow-sm skills-card flex flex-col">
      <div className="gap-6 flex flex-col items-center justify-start">
        <h3 className="card-title font-medium text-lg">{title}</h3>
        <ul className="pb-4 list-outside list-none">
          {listItems.map(({ iconElement: Icon, iconDescription }) => (
            <li
              className="gap-x-3 py-2 flex items-center"
              key={iconDescription}
            >
              <Icon fontSize="1.5rem" />
              <p className="text-sm">{iconDescription}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
