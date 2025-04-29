import { Card, Text } from "@mantine/core";
import type { ElementType, ReactElement } from "react";
import styles from "./personalinterestcard.module.css";

interface PersonalInterestCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

const PersonalInterestCard = ({
  description,
  icon,
  title,
}: PersonalInterestCardProps): ReactElement => {
  const Icon = icon;

  return (
    <Card className={styles.card} padding="xl" radius="md" shadow="md">
      <Icon size={50} stroke={2} />
      <Text className={styles["card-title"]} fw={500} fz="lg" mt="md">
        {title}
      </Text>
      <Text c="dimmed" fz="sm" mt="sm">
        {description}
      </Text>
    </Card>
  );
};

export default PersonalInterestCard;
