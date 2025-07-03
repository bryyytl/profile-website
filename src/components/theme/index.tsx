"use client";

import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import cssVariablesResolver from "./cssVariablesResolver";
import defaultTheme from "./defaultTheme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider
      cssVariablesResolver={cssVariablesResolver}
      defaultColorScheme="auto"
      theme={defaultTheme}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
