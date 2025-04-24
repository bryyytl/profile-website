"use client";

import { AppShell, Stack } from "@mantine/core";
import Skills from "./components/skills";
import About from "./components/about";
import Header from "./components/header";
import Education from "./components/education";
import Experience from "./components/experience";

const Home = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <div />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack gap="xl">
          <About />
          <Skills />
          <Experience />
          <Education />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
