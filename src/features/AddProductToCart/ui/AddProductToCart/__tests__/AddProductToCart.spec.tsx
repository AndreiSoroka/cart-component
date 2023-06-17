import AddProductToCart from "@/features/AddProductToCart/ui/AddProductToCart/AddProductToCart.tsx";
import { renderWithProviders } from "@/shared/config/jest/renderWithProviders";
import { fireEvent } from "@testing-library/react";
import {
  mockShopStateEmpty,
  mockShopStateOneItem,
} from "@/entities/Shops/model/mocks/shops.mock";

describe("ProductForm", () => {
  it("Should render AddProductToCart without crashing", () => {
    const { container } = renderWithProviders(<AddProductToCart />);
    expect(container).toBeTruthy();
  });

  it("Should add a new product", () => {
    const { container, store } = renderWithProviders(<AddProductToCart />, {
      preloadedState: {
        shops: mockShopStateOneItem(),
      },
    });

    expect(store?.getState().cart.list).toEqual([]);

    const $input = container.querySelector("input");
    const $select = container.querySelector("select");
    const $button = container.querySelector("button");

    if (!$input || !$select || !$button) {
      throw new Error("Missing elements");
    }

    fireEvent.change($input, { target: { value: "New product" } });
    fireEvent.change($select, { target: { value: "shop1" } });
    fireEvent.click($button);

    const cart = store?.getState().cart.list;
    expect(cart.length).toEqual(1);
    expect(cart[0].productName).toEqual("New product");
    expect(cart[0].shopId).toEqual("shop1");
  });

  it("Should be in loading", () => {
    const { container } = renderWithProviders(<AddProductToCart />, {
      preloadedState: {
        shops: {
          ...mockShopStateEmpty(),
          status: "pending",
        },
      },
    });

    const $button = container.querySelector("button");
    expect($button).toBeDisabled();
  });
});
