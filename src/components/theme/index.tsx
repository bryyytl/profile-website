"use client";

import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import cssVariablesResolver from "./cssVariablesResolver";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider
      cssVariablesResolver={cssVariablesResolver}
      defaultColorScheme="auto"
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
