import type { Meta } from "@storybook/react";
import ProductForm from "./ProductForm";
import type { StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Entities/Cart/ProductForm",
  component: ProductForm,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} satisfies Meta<typeof ProductForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions = [
  { value: "shop1", label: "Shop 1" },
  { value: "shop2", label: "Shop 2" },
];

export const Default: Story = {
  args: {
    isDisabled: false,
    isLoading: false,
    options: mockOptions,
  },
};
export const Loading: Story = {
  args: {
    isDisabled: false,
    isLoading: true,
    options: [],
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isLoading: false,
    options: mockOptions,
  },
};
