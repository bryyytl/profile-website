import { ActionIcon, Card, createTheme, ScrollArea } from "@mantine/core";

const defaultTheme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: "md",
        size: "lg",
        variant: "default",
      },
    }),
    Card: Card.extend({
      defaultProps: {
        radius: "md",
        shadow: "sm",
        withBorder: true,
      },
    }),
    ScrollArea: ScrollArea.extend({
      defaultProps: {
        type: "auto",
      },
    }),
  },
  fontFamily: "Roboto, Arial, Verdana, sans-serif",
  headings: {
    fontWeight: "500",
  },
});

export default defaultTheme;
