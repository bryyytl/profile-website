"use client";

import {
  CSSVariablesResolver,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import type { PropsWithChildren } from "react";

const theme = createTheme({
  fontFamily: "Roboto, Arial, Verdana, sans-serif",
  headings: {
    fontWeight: "500",
  },
});

const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {
    "--mantine-color-text": "#fff",
  },
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider
      cssVariablesResolver={resolver}
      defaultColorScheme="auto"
      theme={theme}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
