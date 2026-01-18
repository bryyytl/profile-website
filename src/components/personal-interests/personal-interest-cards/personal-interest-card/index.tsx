import type { PersonalInterest } from "@/components/personal-interests/personal-interest-cards/constants";
import type { ReactElement } from "react";

const PersonalInterestCard = ({
  description,
  icon,
  title,
}: PersonalInterest): ReactElement => {
  const Icon = icon;
  return (
    <div className="p-8 rounded-md shadow-sm personal-interest-card flex flex-col">
      <Icon className="size-12 block" stroke="currentColor" strokeWidth={2} />
      <h3 className="card-title mt-4">{title}</h3>
      <p className="text-sm mt-4 text-[var(--mantine-color-dimmed)]">
        {description}
      </p>
    </div>
  );
};

export default PersonalInterestCard;
