"use client";

import { AppShell, Stack } from "@mantine/core";
import About from "./components/about";
import Header from "./components/header";
import Skills from "./components/skills";
import Footer from "./components/footer";
import PersonalInterests from "./components/personal-interests";

const Home = () => {
  return (
    <AppShell footer={{ height: 60 }} header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Stack gap="xl">
          <About />
          <Skills />
          <PersonalInterests />
        </Stack>
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Home;
