"use client";

import { Stack } from "@mantine/core";
import About from "./components/about";
import PersonalInterests from "./components/personal-interests";
import ShellLayout from "./components/shell";
import Skills from "./components/skills";
import { NavigationProvider } from "./common/contexts/navigation";

const HomePage = () => {
  return (
    <NavigationProvider>
      <ShellLayout>
        <Stack gap="xl">
          <About />
          <Skills />
          <PersonalInterests />
        </Stack>
      </ShellLayout>
    </NavigationProvider>
  );
};

export default HomePage;
