import { Title } from "@mantine/core";

const AboutDescription = () => {
  return (
    <div className="max-w-800 rounded-lg p-4 flex flex-col border-1 border-(--mantine-color-gray-3) bg-[var(--mantine-color-blue-light)] text-[var(--mantine-color-text)] dark:border-(--mantine-color-dark-4)">
      <div className="gap-4 flex flex-col items-stretch justify-start">
        <Title order={1} size="h3">
          Hi there, I'm Bryan Laporte!
        </Title>
        <p>
          I am a passionate senior front-end focused full stack web software
          engineer with over 5 years of experience developing graphically rich
          dashboard applications and web APIs in an agile environment.
        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
