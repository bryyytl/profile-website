import { Card, Title } from "@mantine/core";
import type { ReactElement } from "react";
import PersonalInterestCards from "./personal-interest-cards";

const PersonalInterests = (): ReactElement => {
  return (
    <Card bg="var(--background-secondary)" m="md" p="md">
      <div className="gap-4 flex flex-col items-stretch justify-start">
        <Title my="md" order={2} ta="center">
          Personal Interests
        </Title>
      </div>
      <PersonalInterestCards />
    </Card>
  );
};

export default PersonalInterests;
