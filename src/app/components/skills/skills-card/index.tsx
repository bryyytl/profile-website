import { Card } from "@mantine/core";

interface SkillsCardProps {
  cardText: string;
}

const SkillsCard = ({ cardText }: SkillsCardProps) => {
  return (
    <Card withBorder shadow="sm">
      {cardText}
    </Card>
  );
};

export default SkillsCard;
