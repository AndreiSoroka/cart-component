import type { Meta, StoryObj } from "@storybook/react";
import ProductRow from "./ProductRow";

const meta: Meta<typeof ProductRow> = {
  title: "Features/Products/ProductRow",
  component: ProductRow,
  argTypes: {
    onRemove: { action: "removed" },
    elementKey: { control: "number", defaultValue: 0 },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: "Product Name",
    shopName: "Market Name",
    elementKey: 0,
  },
};

export const NextRow: Story = {
  args: {
    product: "Product Name",
    shopName: "Market Name",
    elementKey: 1,
  },
};
