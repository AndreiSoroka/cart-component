import type { Meta, StoryObj } from "@storybook/react";
import ProductRow from "./ProductRow.tsx";
import { RemoveLink } from "@/shared/ui/RemoveLink/RemoveLink.tsx";

const meta: Meta<typeof ProductRow> = {
  title: "Entities/Cart/ProductRow",
  component: ProductRow,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: "Product Name",
    shopName: "Shop Name",
  },
};
export const TextActionSlot: Story = {
  args: {
    product: "Product Name",
    shopName: "Shop Name",
    slotActions: <div>Actions</div>,
  },
};
export const ButtonActionSlot: Story = {
  args: {
    product: "Product Name",
    shopName: "Shop Name",
    slotActions: <RemoveLink label="Action" />,
  },
};
