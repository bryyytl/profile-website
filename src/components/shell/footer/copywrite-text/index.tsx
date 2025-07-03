import { IconCopyright } from "@tabler/icons-react";
import type { ReactElement } from "react";

const CopywriteText = (): ReactElement => {
  return (
    <div className="gap-1 flex items-center justify-center">
      <IconCopyright color="var(--mantine-color-dimmed)" strokeWidth={1} />
      <p className="text-sm text-[var(--mantine-color-dimmed)]">2025</p>
    </div>
  );
};

export default CopywriteText;
