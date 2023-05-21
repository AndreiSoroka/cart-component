import type { Meta, StoryObj } from "@storybook/react";
import ProductInfo from "./ProductInfo";

const meta: Meta = {
  title: "Features/ProductInfo/ProductInfo",
  component: ProductInfo,
  tags: ["Components"],
  argTypes: { onClick: { action: "clicked" } },
  parameters: { actions: { argTypesRegex: "^on.*" } },
} satisfies Meta<typeof ProductInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default",
    disabled: false,
  },
};
