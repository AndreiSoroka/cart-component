import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title.tsx";

const meta: Meta<typeof Title> = {
  title: "Shared/Title",
  component: Title,
  tags: ["Components"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "My small title",
  },
};
