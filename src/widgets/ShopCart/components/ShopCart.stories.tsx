import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import ShopCart from "./ShopCart";
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

const meta: Meta = {
  title: "Widgets/ShopCart",
  component: ShopCart,
};

export default meta;

export const Default: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState,
    cart: mockCartState,
  });

  return (
    <Provider store={store}>
      <ShopCart {...args} />
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
      <ShopCart {...args} />
    </Provider>
  );
};
