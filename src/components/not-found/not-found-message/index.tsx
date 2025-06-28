import type { ReactElement } from "react";

const NotFoundMessage = (): ReactElement => {
  return (
    <p className="text-lg mt-8 mb-12 max-w-135 m-auto text-center text-[var(--mantine-color-dimmed)]">
      The page you are trying to open does not exist. You may have mistyped the
      address, or the page has been moved to another URL. If you think this is
      an error contact support.
    </p>
  );
};

export default NotFoundMessage;
