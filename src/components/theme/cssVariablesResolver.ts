import { CSSVariablesResolver } from "@mantine/core";

const cssVariablesResolver: CSSVariablesResolver = () => ({
  dark: {
    "--mantine-color-text": "#fff",
  },
  light: {},
  variables: {},
});

export default cssVariablesResolver;
