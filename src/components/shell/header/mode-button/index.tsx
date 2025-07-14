"use client";

import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import styles from "./modebutton.module.css";
import clsx from "clsx";

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
      <SunIcon
        aria-hidden="true"
        className={clsx("size-6 block", styles.light)}
      />
      <MoonIcon
        aria-hidden="true"
        className={clsx("size-6 block", styles.dark)}
      />
    </button>
  );
};

export default ModeButton;
