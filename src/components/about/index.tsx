import type { ReactElement } from "react";
import AboutAnimation from "./about-animation";
import AboutDescription from "./about-description";

const About = (): ReactElement => {
  return (
    <div className="gap-4 mx-4 lg:flex-row-reverse flex flex-col items-center justify-between">
      <AboutAnimation />
      <AboutDescription />
    </div>
  );
};

export default About;
