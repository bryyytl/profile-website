"use client";

import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import styles from "./modebutton.module.css";

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
    <button
      aria-label="Toggle Mode"
      className="action-icon cursor-pointer"
      onClick={handleClick}
      type="button"
    >
      <IconSun aria-hidden="true" className={styles.light} stroke={1.5} />
      <IconMoon aria-hidden="true" className={styles.dark} stroke={1.5} />
    </button>
  );
};

export default ModeButton;
