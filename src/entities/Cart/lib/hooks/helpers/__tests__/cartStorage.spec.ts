import { getCartFromStorage, setCartToStorage } from "../cartStorage";

describe("Cart storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should get cart from storage and return default value if cart is not found", () => {
    const defaultValue = [{ id: "1", productName: "product1", shopId: "1" }];
    const result = getCartFromStorage(defaultValue);

    expect(result).toEqual(defaultValue);
  });

  it("should get cart from storage and parse it", () => {
    const cartValue = [{ id: "1", productName: "product1", shopId: "1" }];
    localStorage.setItem("cartStore/list", JSON.stringify(cartValue));

    const result = getCartFromStorage([]);

    expect(result).toEqual(cartValue);
  });

  it("should handle exceptions when parsing localStorage data", () => {
    localStorage.setItem("cartStore/list", "invalid json");

    const defaultValue = [{ id: "1", productName: "product1", shopId: "1" }];
    const result = getCartFromStorage(defaultValue);

    expect(result).toEqual(defaultValue);
  });

  it("should set cart to storage", () => {
    const cartValue = [{ id: "1", productName: "product1", shopId: "1" }];
    setCartToStorage(cartValue);

    const result = JSON.parse(localStorage.getItem("cartStore/list") || "");

    expect(result).toEqual(cartValue);
  });

  it("should handle exceptions when stringifying data to localStorage", () => {
    const stringifySpy = jest
      .spyOn(JSON, "stringify")
      .mockImplementationOnce(() => {
        throw new Error();
      });

    const cartValue = [{ id: "1", productName: "product1", shopId: "1" }];
    setCartToStorage(cartValue);

    expect(localStorage.getItem("cartStore/list")).toBeNull();

    stringifySpy.mockRestore();
  });
});
