import { CSSVariablesResolver } from "@mantine/core";

const cssVariablesResolver: CSSVariablesResolver = () => ({
  dark: {
    "--mantine-color-text": "#fff",
  },
  light: {},
  variables: {
    "--background-secondary": "var(--mantine-color-gray-light)",
  },
});

export default cssVariablesResolver;
