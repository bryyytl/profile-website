import type { ReactElement } from "react";
import PersonalInterestCards from "./personal-interest-cards";

const PersonalInterests = (): ReactElement => {
  return (
    <div className="m-4 p-4 rounded-md shadow-sm personal-interests flex flex-col">
      <div className="gap-4 flex flex-col items-stretch justify-start">
        <h2 className="font-medium my-2 sm:my-4 text-2xl md:text-3xl text-center">
          Personal Interests
        </h2>
      </div>
      <PersonalInterestCards />
    </div>
  );
};

export default PersonalInterests;
