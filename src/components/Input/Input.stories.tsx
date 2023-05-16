import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["Components"],
  argTypes: { onChange: { action: "changed" } },
  parameters: { actions: { argTypesRegex: "^on.*" } },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Enter text",
  },
};

export const Field: Story = {
  args: {
    value: "Kitty",
    placeholder: "Enter text",
  },
};
