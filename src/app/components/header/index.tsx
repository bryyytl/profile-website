import { Group } from "@mantine/core";
import ModeButton from "./mode-button";

const Header = () => {
  return (
    <Group justify="flex-end" p="md">
      <ModeButton />
    </Group>
  );
};

export default Header;
