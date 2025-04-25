import { Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import {
  IconAccessible,
  IconBrandSpeedtest,
  IconBrush,
  IconHeartRateMonitor,
  IconRoute,
  IconMapQuestion,
} from "@tabler/icons-react";
import type { ReactElement } from "react";
import styles from "./personalinterests.module.css";

const PersonalInterests = (): ReactElement => {
  return (
    <Stack>
      <Title order={3}>Personal Interests</Title>
      {/* <Text>
        Specialized interest in UX design systems, application accessibility
        standards, user-centric automated testing, and agile practices.
      </Text> */}
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        <Card className={styles.card} padding="xl" radius="md" shadow="md">
          <IconBrush size={50} stroke={2} />
          <Text className={styles.cardTitle} fw={500} fz="lg" mt="md">
            UX design systems
          </Text>
          <Text c="dimmed" fz="sm" mt="sm">
            Experienced in creating and maintaining responsive (desktop &
            mobile) design systems for small and medium size brands.
          </Text>
        </Card>
        <Card className={styles.card} padding="xl" radius="md" shadow="md">
          <IconAccessible size={50} stroke={2} />
          <Text className={styles.cardTitle} fw={500} fz="lg" mt="md">
            Application accessibility
          </Text>
          <Text c="dimmed" fz="sm" mt="sm">
            Champion of building accessible platforms for all users - regardless
            of background.
          </Text>
        </Card>
        <Card className={styles.card} padding="xl" radius="md" shadow="md">
          <IconBrandSpeedtest size={50} stroke={2} />
          <Text className={styles.cardTitle} fw={500} fz="lg" mt="md">
            Application performance optimization
          </Text>
          <Text c="dimmed" fz="sm" mt="sm">
            Description
          </Text>
        </Card>
        <Card className={styles.card} padding="xl" radius="md" shadow="md">
          <IconHeartRateMonitor size={50} stroke={2} />
          <Text className={styles.cardTitle} fw={500} fz="lg" mt="md">
            User-centric automated testing
          </Text>
          <Text c="dimmed" fz="sm" mt="sm">
            Experienced in leading adoption of unit, integration, and end-to-end
            test suite development for small and medium sized platforms.
          </Text>
        </Card>
        <Card className={styles.card} padding="xl" radius="md" shadow="md">
          <IconMapQuestion size={50} stroke={2} />
          <Text className={styles.cardTitle} fw={500} fz="lg" mt="md">
            Development of large and small scale solutions
          </Text>
          <Text c="dimmed" fz="sm" mt="sm">
            Interest in developing platform solutions, product solutions, and
            internal tools for a variety of use cases.
          </Text>
        </Card>
        <Card className={styles.card} padding="xl" radius="md" shadow="md">
          <IconRoute size={50} stroke={2} />
          <Text className={styles.cardTitle} fw={500} fz="lg" mt="md">
            Product roadmap champion
          </Text>
          <Text c="dimmed" fz="sm" mt="sm">
            Experienced in guiding product direction and details from the start,
            middle, and end of projects - particularly through the adoption of
            agile practices.
          </Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
};

export default PersonalInterests;
