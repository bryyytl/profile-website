import { Card, Title } from "@mantine/core";
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
      <p className="text-sm mt-4 text-[var(--mantine-color-dimmed)]">
        {description}
      </p>
    </Card>
  );
};

export default PersonalInterestCard;
