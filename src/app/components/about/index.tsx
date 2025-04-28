import { Card, Stack, Title } from "@mantine/core";
import AboutAnimation from "./about-animation";
import PersonalInterests from "./personal-interests";
import styles from "./about.module.css";

const About = () => {
  return (
    <Stack gap="xl" p="xl">
      <Title order={2}>About</Title>
      <div className={styles["about-container"]}>
        <AboutAnimation />
        <Card radius="md" shadow="md" withBorder>
          Passionate senior front-end focused full stack web software engineer
          with 5+ years of experience developing graphically rich dashboard
          applications and web APIs in an agile environment.
        </Card>
      </div>
      <PersonalInterests />
    </Stack>
  );
};

export default About;
