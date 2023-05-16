import type { Meta, StoryObj } from "@storybook/react";
import { RemoveLink } from "./RemoveLink";

const meta: Meta<typeof RemoveLink> = {
  title: "Components/RemoveLink",
  component: RemoveLink,
  tags: ["Components"],
  argTypes: { onClick: { action: "clicked" } },
  parameters: { actions: { argTypesRegex: "^on.*" } },
} satisfies Meta<typeof RemoveLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Remove item",
  },
};
