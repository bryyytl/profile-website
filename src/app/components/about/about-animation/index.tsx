import { Box } from "@mantine/core";
import dynamic from "next/dynamic";
import devAnimation from "./lottie-asset.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutAnimation = () => {
  return (
    <Box maw={450}>
      <Lottie animationData={devAnimation} loop={true} />
    </Box>
  );
};

export default AboutAnimation;
