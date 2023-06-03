import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import ProductForm from "./ProductForm";
import { setupStore } from "@/store";

const mockShopState = {
  isLoading: false,
  isLoaded: true,
  list: {
    ids: ["1", "2"],
    entities: {
      "1": { id: "1", name: "Shop 1", sortOrder: 1 },
      "2": { id: "2", name: "Shop 2", sortOrder: 2 },
    },
  },
  error: "",
};
const mockCartState = {
  list: [],
};

const meta: Meta<typeof ProductForm> = {
  title: "Features/ProductForm/ProductForm",
  component: ProductForm,
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;

export const Default: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState,
    cart: mockCartState,
  });

  return (
    <Provider store={store}>
      <ProductForm {...args} />
    </Provider>
  );
};

export const Loading: StoryFn = (args) => {
  const store = setupStore({
    shops: { ...mockShopState, isLoading: true },
    cart: mockCartState,
  });

  return (
    <Provider store={store}>
      <ProductForm {...args} />
    </Provider>
  );
};
