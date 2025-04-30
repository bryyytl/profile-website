import { Card, Stack, Title } from "@mantine/core";
import type { ReactElement } from "react";
import PersonalInterestCards from "./personal-interest-cards";

const PersonalInterests = (): ReactElement => {
  return (
    <Card bg="var(--background-secondary)" m="md" p="md">
      <Stack>
        <Title my="md" order={2} ta="center">
          Personal Interests
        </Title>
      </Stack>
      <PersonalInterestCards />
    </Card>
  );
};

export default PersonalInterests;
