import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import ShopCart from "./ShopCart";
import { setupStore } from "@/store";
import { mockShopState } from "@/entities/Shops/model/mocks/shops.mock";
import {
  mockCartState,
  mockCartStateEmpty,
} from "@/entities/Cart/model/mocks/cart.mock";

const meta: Meta = {
  title: "Widgets/ShopCart",
  component: ShopCart,
};

export default meta;

export const Default: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState(),
    cart: mockCartState(),
  });

  return (
    <Provider store={store}>
      <ShopCart {...args} />
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
      <ShopCart {...args} />
    </Provider>
  );
};
