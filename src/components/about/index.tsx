import AboutAnimation from "./about-animation";
import AboutDescription from "./about-description";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <AboutAnimation />
      <AboutDescription />
    </div>
  );
};

export default About;
