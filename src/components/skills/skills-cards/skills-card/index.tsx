import CardTitle from "@/components/card-title";
import type { Skill } from "@/components/skills/skills-cards/constants";
import { Card } from "@mantine/core";
import type { ReactElement } from "react";

const SkillsCard = ({ title, listItems }: Skill): ReactElement => {
  return (
    <Card h="100%" padding="lg">
      <div className="gap-6 flex flex-col items-center justify-start">
        <CardTitle>{title}</CardTitle>
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
    </Card>
  );
};

export default SkillsCard;
