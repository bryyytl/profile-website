"use client";

import {
  ActionIcon,
  Tooltip,
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
  const toggleEffect = computedColorScheme === "light" ? "dark" : "light";

  const handleClick = () => {
    setColorScheme(toggleEffect);
  };

  return (
    <Tooltip label={`${toggleEffect} mode`} tt="capitalize">
      <ActionIcon aria-label="Toggle Mode" onClick={handleClick}>
        <IconSun className={classes.light} stroke={1.5} />
        <IconMoon className={classes.dark} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
};

export default ModeButton;
