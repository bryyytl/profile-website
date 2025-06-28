import { Button } from "@mantine/core";
import Link from "next/link";
import type { ReactElement } from "react";

const ReturnHomeLink = (): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <Button component={Link} fw={500} href="/" size="md">
        Take me back to home page
      </Button>
    </div>
  );
};

export default ReturnHomeLink;
