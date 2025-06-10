"use client";

import type { ReactElement } from "react";
import { NavigationProvider } from "../common/contexts/navigation";
import Resources from "../components/resources";
import ShellLayout from "../components/shell";
import { ResourceFilterProvider } from "../common/contexts/resource-filter";

const ResourcesPage = (): ReactElement => {
  return (
    <NavigationProvider>
      <ShellLayout>
        <ResourceFilterProvider>
          <Resources />
        </ResourceFilterProvider>
      </ShellLayout>
    </NavigationProvider>
  );
};

export default ResourcesPage;
