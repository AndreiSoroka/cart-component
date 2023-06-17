import { renderWithProviders } from "@/shared/config/jest/renderWithProviders.tsx";
import { fireEvent, waitFor } from "@testing-library/react";
import { mockShopState } from "@/entities/Shops/model/mocks/shops.mock.ts";
import { mockCartState } from "@/entities/Cart/model/mocks/cart.mock.ts";
import RemoveProductFromCart from "../RemoveProductFromCart.tsx";

describe("RemoveProductFromCart", () => {
  it("Should remove a product when 'Remove' button is clicked", async () => {
    const preloadedState = {
      shops: mockShopState(),
      cart: mockCartState(),
    };
    const { container, store } = renderWithProviders(
      <RemoveProductFromCart
        id={preloadedState.cart.list[0].id}
        dataTestId="remove-link"
      />,
      {
        preloadedState,
      }
    );

    await waitFor(() => container.textContent);
    const $removeLink = container.querySelector("[data-testid=remove-link]");
    if (!$removeLink) {
      throw new Error("$removeLink is empty");
    }

    expect(store?.getState().cart.list.length).toEqual(2);
    fireEvent.click($removeLink);
    expect(store?.getState().cart.list.length).toEqual(1);
  });
});
