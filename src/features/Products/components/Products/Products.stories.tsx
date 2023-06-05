import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import Products from "./Products";
import { setupStore } from "@/store";
import {
  mockShopState,
  mockShopStateEmpty,
} from "@/entities/Shops/model/mocks/shops.mock";
import {
  mockCartState,
  mockCartStateEmpty,
} from "@/entities/Cart/model/mocks/cart.mock";

const meta: Meta<typeof Products> = {
  title: "Features/Products/Products",
  component: Products,
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;

export const Default: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState(),
    cart: mockCartState(),
  });

  return (
    <Provider store={store}>
      <Products {...args} />
    </Provider>
  );
};

export const EmptyCart: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState(),
    cart: mockCartStateEmpty(),
  });

  return (
    <Provider store={store}>
      <Products {...args} />
    </Provider>
  );
};

export const EmptyShopAndLoading: StoryFn = (args) => {
  const store = setupStore({
    shops: {
      ...mockShopStateEmpty(),
      status: "pending",
    },
    cart: mockCartState(),
  });

  return (
    <Provider store={store}>
      <Products {...args} />
    </Provider>
  );
};
