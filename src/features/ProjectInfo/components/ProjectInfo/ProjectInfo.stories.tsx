import type { Meta, StoryObj } from "@storybook/react";
import ProjectInfo from "./ProjectInfo";

const meta: Meta = {
  title: "Features/ProjectInfo/ProjectInfo",
  component: ProjectInfo,
  tags: ["Components"],
  argTypes: { onClick: { action: "clicked" } },
  parameters: { actions: { argTypesRegex: "^on.*" } },
} satisfies Meta<typeof ProjectInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default",
    disabled: false,
  },
};
