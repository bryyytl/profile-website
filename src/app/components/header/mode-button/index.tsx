"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

// TODO: Address https://mantine.dev/theming/color-schemes/#color-scheme-value-caveats

const ModeButton = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      bd="xl"
      size="lg"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? <IconMoon /> : <IconSun />}
    </ActionIcon>
  );
};

export default ModeButton;
