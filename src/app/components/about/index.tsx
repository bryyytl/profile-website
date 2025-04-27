import { Card, Flex, Stack, Title } from "@mantine/core";
import AboutAnimation from "./about-animation";
import PersonalInterests from "./personal-interests";

const About = () => {
  return (
    <Stack p="xl">
      <Title order={2}>About</Title>
      <Flex align="flex-start" gap="md">
        <AboutAnimation />
        <Card radius="md" shadow="md" withBorder>
          Passionate senior front-end focused full stack web software engineer
          with 5+ years of experience developing graphically rich dashboard
          applications and web APIs in an agile environment.
        </Card>
      </Flex>
      <PersonalInterests />
    </Stack>
  );
};

export default About;
