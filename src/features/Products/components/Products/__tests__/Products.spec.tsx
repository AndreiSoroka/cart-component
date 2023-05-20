import { Products } from "@/features/Products";
import { renderWithProviders } from "@/shared/config/jest/renderWithProviders";
import { fireEvent, waitFor } from "@testing-library/react";

describe("Products", () => {
  it("Should render Products without crashing", () => {
    const { container } = renderWithProviders(<Products />);
    expect(container).toBeTruthy();
  });

  it("Should display a list of products", async () => {
    const { container } = renderWithProviders(<Products />, {
      preloadedState: {
        shops: {
          isLoading: false,
          list: [
            {
              id: "shop1",
              name: "Shop 1",
              sortOrder: 1,
            },
          ],
          error: "",
          isLoaded: true,
        },
        cart: {
          list: [
            {
              id: "product1",
              productName: "Product 1",
              shopId: "shop1",
            },
            {
              id: "product2",
              productName: "Product 2",
              shopId: "shop1",
            },
          ],
        },
      },
    });

    await waitFor(() => container.textContent);

    expect(container.textContent).toContain("Product 1");
    expect(container.textContent).toContain("Product 2");
    expect(container.textContent).toContain("Shop 1");
  });

  it("Should remove a product when 'Remove' button is clicked", async () => {
    const { container, store } = renderWithProviders(<Products />, {
      preloadedState: {
        shops: {
          isLoading: false,
          list: [
            {
              id: "shop1",
              name: "Shop 1",
              sortOrder: 1,
            },
          ],
          error: "",
          isLoaded: true,
        },
        cart: {
          list: [
            {
              id: "product1",
              productName: "Product 1",
              shopId: "shop1",
            },
            {
              id: "product2",
              productName: "Product 2",
              shopId: "shop2",
            },
          ],
        },
      },
    });

    await waitFor(() => container.textContent);
    const $removeLink = container.querySelector('[data-test-el="remove-link"]');
    if (!$removeLink) {
      throw new Error("$removeLink is empty");
    }

    fireEvent.click($removeLink);
    expect(store?.getState().cart.list.length).toEqual(1);
  });
});
