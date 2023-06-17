import type { Meta, StoryObj } from "@storybook/react";
import PageWrapper from "./PageWrapper.tsx";

const meta: Meta<typeof PageWrapper> = {
  title: "Shared/PageWrapper",
  component: PageWrapper,
  tags: ["Components"],
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Page content",
  },
};

export const WithCustomContent: Story = {
  args: {
    children: [<div>Div 1</div>, <div>Div 2</div>, <div>Div 3</div>],
  },
};
