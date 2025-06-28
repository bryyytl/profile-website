import clsx from "clsx";
import type { PropsWithChildren, ReactElement } from "react";
import styles from "./cardtitle.module.css";

interface CardTitleProps {
  className?: string;
}

const CardTitle = ({
  className,
  children,
}: PropsWithChildren<CardTitleProps>): ReactElement => {
  return (
    <h3
      className={clsx("font-medium text-lg", styles["card-title"], className)}
    >
      {children}
    </h3>
  );
};

export default CardTitle;
