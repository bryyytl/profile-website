import CardTitle from "@/components/card-title";
import type { PersonalInterest } from "@/components/personal-interests/personal-interest-cards/constants";
import clsx from "clsx";
import type { ReactElement } from "react";
import styles from "./personalinterestcard.module.css";

const PersonalInterestCard = ({
  description,
  icon,
  title,
}: PersonalInterest): ReactElement => {
  const Icon = icon;
  return (
    <div
      className={clsx(
        "p-8 rounded-md shadow-sm flex flex-col",
        styles["personal-interest-card"],
      )}
    >
      <Icon size={50} stroke={2} />
      <CardTitle className="mt-4">{title}</CardTitle>
      <p className="text-sm mt-4 text-[var(--mantine-color-dimmed)]">
        {description}
      </p>
    </div>
  );
};

export default PersonalInterestCard;
