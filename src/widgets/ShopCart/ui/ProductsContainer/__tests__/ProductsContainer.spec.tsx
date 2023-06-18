import { renderWithProviders } from "@/shared/config/jest/renderWithProviders.tsx";
import { fireEvent, waitFor } from "@testing-library/react";
import { mockShopStateOneItem } from "@/entities/Shops/model/mocks/shops.mock.ts";
import { mockCartState } from "@/entities/Cart/model/mocks/cart.mock.ts";
import ProductsContainer from "@/widgets/ShopCart/ui/ProductsContainer/ProductsContainer.tsx";

describe("Products", () => {
  it("Should render Products without crashing", () => {
    const { container } = renderWithProviders(<ProductsContainer />);
    expect(container).toBeTruthy();
  });

  it("Should display a list of products", async () => {
    const { container } = renderWithProviders(<ProductsContainer />, {
      preloadedState: {
        shops: mockShopStateOneItem(),
        cart: mockCartState(),
      },
    });

    await waitFor(() => container.textContent);
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(container.textContent).toContain("Product 1");
    expect(container.textContent).toContain("Product 2");
    expect(container.textContent).toContain("Shop 1");
  });

  it("Should remove a product when 'Remove' button is clicked", async () => {
    const { container, store } = renderWithProviders(<ProductsContainer />, {
      preloadedState: {
        shops: mockShopStateOneItem(),
        cart: mockCartState(),
      },
    });

    function getRemoveLink() {
      return container.querySelector(
        "[data-testid=productContainer__removeLink]"
      );
    }
    await waitFor(getRemoveLink);
    const $removeLink = getRemoveLink();
    if (!$removeLink) {
      throw new Error("$removeLink is empty");
    }

    fireEvent.click($removeLink);
    expect(store?.getState().cart.list.length).toEqual(1);
  });
});
