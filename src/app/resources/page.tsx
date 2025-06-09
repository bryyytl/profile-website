"use client";

import type { ReactElement } from "react";
import { NavigationProvider } from "../common/contexts/navigation";
import ResourcesList from "../components/resources-list";
import ShellLayout from "../components/shell";

const ResourcesPage = (): ReactElement => {
  return (
    <NavigationProvider>
      <ShellLayout>
        <ResourcesList />
      </ShellLayout>
    </NavigationProvider>
  );
};

export default ResourcesPage;
