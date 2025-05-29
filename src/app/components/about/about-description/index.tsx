import { Card, Stack, Text, Title } from "@mantine/core";

const AboutDescription = () => {
  return (
    <Card bg="var(--mantine-color-blue-light)" maw={800}>
      <Stack>
        <Title order={1} size="h3">
          Hi there, I'm Bryan Laporte!
        </Title>
        <Text>
          I am a passionate senior front-end focused full stack web software
          engineer with over 5 years of experience developing graphically rich
          dashboard applications and web APIs in an agile environment.
        </Text>
      </Stack>
    </Card>
  );
};

export default AboutDescription;
