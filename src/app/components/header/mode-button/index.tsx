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

  const handleClick = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  return (
    <ActionIcon
      aria-label="Toggle color scheme"
      bd="xl"
      onClick={handleClick}
      size="lg"
      variant="default"
    >
      {computedColorScheme === "light" ? <IconMoon /> : <IconSun />}
    </ActionIcon>
  );
};

export default ModeButton;
