import { Card } from "@mantine/core";
import { ElementType } from "react";

interface SkillsCardProps {
  cardIcon: ElementType;
}

const SkillsCard = ({ cardIcon }: SkillsCardProps) => {
  const CardIcon = cardIcon;

  return (
    <Card shadow="sm" w="fit-content" withBorder>
      <CardIcon />
    </Card>
  );
};

export default SkillsCard;
