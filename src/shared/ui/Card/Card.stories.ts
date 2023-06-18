import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Shared/Card",
  component: Card,
  tags: ["Components"],
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomContent: Story = {
  args: {
    children: "Custom card content",
  },
};
