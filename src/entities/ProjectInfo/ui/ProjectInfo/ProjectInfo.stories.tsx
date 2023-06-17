import type { Meta, StoryObj } from "@storybook/react";
import ProjectInfo from "./ProjectInfo";

const meta: Meta = {
  title: "Entities/ProjectInfo/ProjectInfo",
  component: ProjectInfo,
  tags: ["Components"],
} satisfies Meta<typeof ProjectInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
