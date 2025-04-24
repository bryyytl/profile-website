import { Box, Flex, Stack, Text, Title } from "@mantine/core";
// import devAnimation from "./lottie-asset.json";
// import dynamic from 'next/dynamic';

// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const About = () => {
  return (
    <Stack>
      <Title order={2}>About</Title>
      <Flex align="flex-start" gap="md">
        <Box bg="blue" w={500} h="200">
          {/* <Lottie animationData={devAnimation} loop={true} /> */}
        </Box>
        <Stack mt="md">
          <Text>
            {`Passionate senior front-end focused full stack web software engineer with 5+ years of experience developing graphically rich dashboard applications and web APIs in an agile environment.`}
          </Text>
          <Text>
            {`Specialized interest in UX design systems, application accessibility standards, user-centric automated testing, and agile practices.`}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default About;
