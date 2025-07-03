"use client";

import Resources from "@/components/resources";
import ShellLayout from "@/components/shell";
import { NavigationProvider } from "@/contexts/navigation";
import { ResourceFilterProvider } from "@/contexts/resource-filter";
import type { ReactElement } from "react";

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
