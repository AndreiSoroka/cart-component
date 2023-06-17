import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import ShopCartWidget from "./ShopCartWidget.tsx";
import { setupStore } from "@/store.ts";
import { mockShopState } from "@/entities/Shops/model/mocks/shops.mock.ts";
import {
  mockCartState,
  mockCartStateEmpty,
} from "@/entities/Cart/model/mocks/cart.mock.ts";

const meta: Meta = {
  title: "Widgets/ShopCart",
  component: ShopCartWidget,
};

export default meta;

export const Default: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState(),
    cart: mockCartState(),
  });

  return (
    <Provider store={store}>
      <ShopCartWidget {...args} />
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
      <ShopCartWidget {...args} />
    </Provider>
  );
};
