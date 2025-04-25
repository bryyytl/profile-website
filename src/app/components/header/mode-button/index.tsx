"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./modebutton.module.css";

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
      onClick={handleClick}
      radius="md"
      size="lg"
      variant="default"
    >
      <IconSun className={classes.light} stroke={1.5} />
      <IconMoon className={classes.dark} stroke={1.5} />
    </ActionIcon>
  );
};

export default ModeButton;
