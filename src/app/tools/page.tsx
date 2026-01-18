"use client";

import ShellLayout from "@/components/shell";
import Tools from "@/components/tools";
import { NavigationProvider } from "@/contexts/navigation";
import type { ReactElement } from "react";

const ToolsPage = (): ReactElement => {
  return (
    <NavigationProvider>
      <ShellLayout>
        <Tools />
      </ShellLayout>
    </NavigationProvider>
  );
};

export default ToolsPage;
