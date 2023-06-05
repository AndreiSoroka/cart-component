import { Provider } from "react-redux";
import type { Meta, StoryFn } from "@storybook/react";
import ProductForm from "./ProductForm";
import { setupStore } from "@/store";
import { mockShopState } from "@/entities/Shops/model/mocks/shops.mock";
import { mockCartStateEmpty } from "@/entities/Cart/model/mocks/cart.mock";

const meta: Meta<typeof ProductForm> = {
  title: "Features/ProductForm/ProductForm",
  component: ProductForm,
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;

export const Default: StoryFn = (args) => {
  const store = setupStore({
    shops: mockShopState(),
    cart: mockCartStateEmpty(),
  });

  return (
    <Provider store={store}>
      <ProductForm {...args} />
    </Provider>
  );
};

export const Loading: StoryFn = (args) => {
  const store = setupStore({
    shops: { ...mockShopState(), status: "pending" },
    cart: mockCartStateEmpty(),
  });

  return (
    <Provider store={store}>
      <ProductForm {...args} />
    </Provider>
  );
};
