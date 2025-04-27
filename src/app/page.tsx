"use client";

import { AppShell, Stack } from "@mantine/core";
import About from "./components/about";
import Header from "./components/header";
import Skills from "./components/skills";

const Home = () => {
  return (
    <AppShell
      // footer={{ height: 60 }}
      header={{ height: 60 }}
      // navbar={{
      //   width: 200,
      //   breakpoint: "sm",
      // }}
      // padding="md"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">
        <div />
      </AppShell.Navbar> */}
      <AppShell.Main>
        <Stack gap="xl">
          <About />
          <Skills />
        </Stack>
      </AppShell.Main>
      {/* <AppShell.Footer p="md">Footer</AppShell.Footer> */}
    </AppShell>
  );
};

export default Home;
