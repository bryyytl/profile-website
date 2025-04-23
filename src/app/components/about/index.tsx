import { Box, Stack, Title } from "@mantine/core";
import devAnimation from "./lottie-asset.json";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const About = () => {
  return (
    <Stack>
      <Title order={2}>About</Title>
      <Box w={250} h={250}>
        <Lottie animationData={devAnimation} loop={true} />
      </Box>
    </Stack>
  );
};

export default About;
