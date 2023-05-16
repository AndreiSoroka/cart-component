import Select from "./Select";
import type { Meta } from "@storybook/react";
import type Option from "@/components/Input/types/Option.type";
import type { StoryObj } from "@storybook/react";

const options: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["Components"],
  argTypes: {
    onChange: { action: "changed" },
    defaultValue: {
      type: "select",
      options: options.map((item) => item.value),
    } as never, // storybook type bug
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: options,
    defaultValue: "",
    placeholder: "Select option",
  },
};
export const Field: Story = {
  args: {
    options: options,
    defaultValue: "option1",
    placeholder: "Select option",
  },
};
