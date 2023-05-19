import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import Products from "./Products";
import { setupStore } from "@/store";

const mockShopState = {
  isLoading: false,
  isLoaded: true,
  list: [
    { id: "1", name: "Shop 1", sortOrder: 1 },
    { id: "2", name: "Shop 2", sortOrder: 2 },
  ],
  error: "",
};

const mockCartState = {
  list: [
    { id: "1", productName: "Product 1", shopId: "1" },
    { id: "2", productName: "Product 2", shopId: "2" },
  ],
};

const meta: Meta<typeof Products> = {
  title: "Features/Products/Products",
  component: Products,
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
      <Products {...args} />
    </Provider>
  );
};

export const EmptyCart: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState,
    cart: { list: [] },
  });

  return (
    <Provider store={store}>
      <Products {...args} />
    </Provider>
  );
};

export const EmptyShopAndLoading: StoryFn = (args) => {
  const store = setupStore({
    shops: { ...mockShopState, isLoading: true, list: [] },
    cart: mockCartState,
  });

  return (
    <Provider store={store}>
      <Products {...args} />
    </Provider>
  );
};
