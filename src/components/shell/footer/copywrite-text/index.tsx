import CopywriteIcon from "@/components/icons/copywrite-icon";
import type { ReactElement } from "react";

const CopywriteText = (): ReactElement => {
  return (
    <div className="gap-1 flex items-center justify-center">
      <CopywriteIcon
        className="size-6 block"
        fill="none"
        stroke="var(--mantine-color-dimmed)"
        strokeWidth={1}
      />
      <p className="text-sm text-[var(--mantine-color-dimmed)]">2025</p>
    </div>
  );
};

export default CopywriteText;
