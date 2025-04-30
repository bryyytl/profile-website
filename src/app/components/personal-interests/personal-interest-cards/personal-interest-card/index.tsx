import { Card, Text, Title } from "@mantine/core";
import type { ReactElement } from "react";
import type { PersonalInterestCard } from "../constants";
import styles from "./personalinterestcard.module.css";

const PersonalInterestCard = ({
  description,
  icon,
  title,
}: PersonalInterestCard): ReactElement => {
  const Icon = icon;

  return (
    <Card className={styles.card} padding="xl">
      <Icon size={50} stroke={2} />
      <Title className={styles["card-title"]} mt="md" order={3} size="h4">
        {title}
      </Title>
      <Text c="dimmed" fz="sm" mt="sm">
        {description}
      </Text>
    </Card>
  );
};

export default PersonalInterestCard;
