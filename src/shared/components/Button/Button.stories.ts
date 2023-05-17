import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Components/Button",
  component: Button,
  tags: ["Components"],
  argTypes: { onClick: { action: "clicked" } },
  parameters: { actions: { argTypesRegex: "^on.*" } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Default",
  },
};
