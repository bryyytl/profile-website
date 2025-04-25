import { Stack, Title, TypographyStylesProvider } from "@mantine/core";
import Markdown from "react-markdown";
import markdown from "./constants";

const Experience = () => {
  return (
    <Stack>
      <Title order={2}>Experience</Title>
      <TypographyStylesProvider>
        <Markdown>{markdown}</Markdown>
      </TypographyStylesProvider>
    </Stack>
  );
};

export default Experience;
