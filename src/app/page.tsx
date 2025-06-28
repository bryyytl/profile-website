"use client";

import About from "@/components/about";
import PersonalInterests from "@/components/personal-interests";
import ShellLayout from "@/components/shell";
import Skills from "@/components/skills";
import { NavigationProvider } from "@/contexts/navigation";

const HomePage = () => {
  return (
    <NavigationProvider>
      <ShellLayout>
        <div className="gap-8 flex flex-col items-stretch justify-start">
          <About />
          <Skills />
          <PersonalInterests />
        </div>
      </ShellLayout>
    </NavigationProvider>
  );
};

export default HomePage;
