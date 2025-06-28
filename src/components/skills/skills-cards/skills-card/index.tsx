import CardTitle from "@/components/card-title";
import type { Skill } from "@/components/skills/skills-cards/constants";
import { Card, List } from "@mantine/core";
import type { ReactElement } from "react";

const SkillsCard = ({ title, listItems }: Skill): ReactElement => {
  return (
    <Card padding="lg">
      <div className="gap-8 flex flex-col items-center justify-start">
        <CardTitle>{title}</CardTitle>
        <List center pb="md" size="sm" spacing="xs">
          {listItems.map(({ iconElement: Icon, iconDescription }) => (
            <List.Item icon={<Icon fontSize="1.5rem" />} key={iconDescription}>
              {iconDescription}
            </List.Item>
          ))}
        </List>
      </div>
    </Card>
  );
};

export default SkillsCard;
