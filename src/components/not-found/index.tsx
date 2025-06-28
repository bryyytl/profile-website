import { Container } from "@mantine/core";
import type { ReactElement } from "react";
import NotFoundIndicator from "./not-found-indicator";
import NotFoundMessage from "./not-found-message";
import ReturnHomeLink from "./return-home-link";

const NotFound = (): ReactElement => {
  return (
    <Container className="py-20">
      <div className="relative">
        <NotFoundIndicator />
        <div className="pt-30 md:pt-55 relative z-1">
          <h1 className="font-medium text-3xl md:text-4xl text-center">
            Nothing to see here
          </h1>
          <NotFoundMessage />
          <ReturnHomeLink />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
