import { Card, List, Stack, Title } from "@mantine/core";
import type { ReactElement } from "react";
import styles from "./skillscard.module.css";
import type { SkillsCard } from "../constants";

const SkillsCard = ({ title, listItems }: SkillsCard): ReactElement => {
  return (
    <Card padding="lg">
      <Stack align="center" gap="xl">
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
      </Stack>
    </Card>
  );
};

export default SkillsCard;
