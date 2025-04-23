"use client";

import { AppShell, Stack } from "@mantine/core";
import Skills from "./components/skills";
import About from "./components/about";

const Home = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: "sm",
      // }}
      padding="md"
    >
      <AppShell.Header>
        <div />
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
      <AppShell.Main>
        <Stack gap="xl">
          <About />
          <Skills />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
