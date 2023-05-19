import { ProductForm } from "@/features/ProductForm";
import { renderWithProviders } from "@/shared/config/jest/renderWithProviders";
import { fireEvent } from "@testing-library/react";

describe("ProductForm", () => {
  it("Should render ProductForm without crashing", () => {
    const { container } = renderWithProviders(<ProductForm />);
    expect(container).toBeTruthy();
  });

  it("Should add a new product", () => {
    const { container, store } = renderWithProviders(<ProductForm />, {
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
    const { container } = renderWithProviders(<ProductForm />, {
      preloadedState: {
        shops: {
          isLoading: true,
          list: [],
          error: "",
          isLoaded: true,
        },
      },
    });

    // const $input = container.querySelector("input");
    // const $select = container.querySelector("select");
    const $button = container.querySelector("button");

    // expect($input).toBeFalsy();
    // expect($select.textContent).toBeFalsy();
    expect($button).toBeDisabled();
  });
});
