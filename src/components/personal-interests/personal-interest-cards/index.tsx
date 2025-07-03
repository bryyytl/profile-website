import type { ReactElement } from "react";
import { personalInterests } from "./constants";
import PersonalInterestCard from "./personal-interest-card";

const PersonalInterestCards = (): ReactElement => {
  return (
    <ul className="gap-4 sm:grid-cols-2 lg:grid-cols-3 p-2 grid grid-cols-1">
      {personalInterests.map(({ icon, title, description }) => (
        <li className="col-span-1" key={title}>
          <PersonalInterestCard
            description={description}
            icon={icon}
            title={title}
          />
        </li>
      ))}
    </ul>
  );
};

export default PersonalInterestCards;
