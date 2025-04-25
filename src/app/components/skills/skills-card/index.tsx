import { Card } from "@mantine/core";
import { ElementType } from "react";

interface SkillsCardProps {
  cardIcon: ElementType;
}

const SkillsCard = ({ cardIcon }: SkillsCardProps) => {
  const CardIcon = cardIcon;

  return (
    <Card p="sm" radius="xl" shadow="sm" withBorder>
      <CardIcon />
    </Card>
  );
};

export default SkillsCard;
