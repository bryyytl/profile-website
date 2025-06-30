import Link from "next/link";
import type { ReactElement } from "react";

const ReturnHomeLink = (): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <Link
        className="rounded-md px-4 py-2 text-md font-medium text-white shadow-xs hover:bg-blue-500 focus-visible:outline-blue-600 bg-[var(--mantine-primary-color-filled)] focus-visible:outline-2 focus-visible:outline-offset-2"
        href="/"
      >
        Take me back to home page
      </Link>
    </div>
  );
};

export default ReturnHomeLink;
