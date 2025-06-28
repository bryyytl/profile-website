import CardTitle from "@/components/card-title";
import type { PersonalInterest } from "@/components/personal-interests/personal-interest-cards/constants";
import { Card } from "@mantine/core";
import type { ReactElement } from "react";
import styles from "./personalinterestcard.module.css";

const PersonalInterestCard = ({
  description,
  icon,
  title,
}: PersonalInterest): ReactElement => {
  const Icon = icon;

  return (
    <Card className={styles.card} padding="xl">
      <Icon size={50} stroke={2} />
      <CardTitle className="mt-4">{title}</CardTitle>
      <p className="text-sm mt-4 text-[var(--mantine-color-dimmed)]">
        {description}
      </p>
    </Card>
  );
};

export default PersonalInterestCard;
