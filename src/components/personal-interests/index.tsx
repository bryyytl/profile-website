import { Card } from "@mantine/core";
import type { ReactElement } from "react";
import PersonalInterestCards from "./personal-interest-cards";

const PersonalInterests = (): ReactElement => {
  return (
    <Card bg="var(--background-secondary)" m="md" p="md">
      <div className="gap-4 flex flex-col items-stretch justify-start">
        <h2 className="font-medium my-2 sm:my-4 text-2xl md:text-3xl text-center">
          Personal Interests
        </h2>
      </div>
      <PersonalInterestCards />
    </Card>
  );
};

export default PersonalInterests;
