import { Card, List, Title } from "@mantine/core";
import type { ReactElement } from "react";
import styles from "./skillscard.module.css";
import type { SkillsCard } from "../constants";

const SkillsCard = ({ title, listItems }: SkillsCard): ReactElement => {
  return (
    <Card padding="lg">
      <div className="gap-8 flex flex-col items-center justify-start">
        <Title className={styles["skills-card-title"]} order={3} size="h4">
          {title}
        </Title>
        <List center pb="md" size="sm" spacing="xs">
          {listItems.map(({ iconElement: Icon, iconDescription }) => (
            <List.Item icon={<Icon fontSize="1.5rem" />} key={iconDescription}>
              {iconDescription}
            </List.Item>
          ))}
        </List>
      </div>
    </Card>
  );
};

export default SkillsCard;
