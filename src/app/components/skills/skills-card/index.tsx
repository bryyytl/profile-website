import { Card } from "@mantine/core";
import { ElementType } from "react";

interface SkillsCardProps {
  cardIcon: ElementType;
}

const SkillsCard = ({ cardIcon }: SkillsCardProps) => {
  const CardIcon = cardIcon;

  return (
    <Card withBorder shadow="sm" w="fit-content">
      <CardIcon />
    </Card>
  );
};

export default SkillsCard;
