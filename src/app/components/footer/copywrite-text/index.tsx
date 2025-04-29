import { Group, Text } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import type { ReactElement } from "react";

const CopywriteText = (): ReactElement => {
  return (
    <Group gap={4} wrap="nowrap">
      <IconCopyright color="var(--mantine-color-dimmed)" strokeWidth={1} />
      <Text c="dimmed" size="sm">
        2025
      </Text>
    </Group>
  );
};

export default CopywriteText;
