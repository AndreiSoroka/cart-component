import type { Meta, StoryObj } from "@storybook/react";
import CardContent from "./CardContent";

const meta: Meta<typeof CardContent> = {
  title: "Shared/Card/CardContent",
  component: CardContent,
  tags: ["Components"],
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Custom card content",
  },
};
