import type { ReactElement } from "react";

const AboutDescription = (): ReactElement => {
  return (
    <div className="max-w-800 rounded-lg p-4 about-description flex flex-col bg-[var(--mantine-color-blue-light)] text-[var(--mantine-color-text)]">
      <div className="gap-4 flex flex-col items-stretch justify-start">
        <h2 className="font-medium text-xl md:text-2xl">
          Hi there, I'm Bryan Laporte!
        </h2>
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
