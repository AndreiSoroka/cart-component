import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "./Row";

const meta: Meta<typeof Row> = {
  title: "Feature/ShopCart/Row",
  component: Row,
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
    market: "Market Name",
    elementKey: 0,
  },
};

export const NextRow: Story = {
  args: {
    product: "Product Name",
    market: "Market Name",
    elementKey: 1,
  },
};
