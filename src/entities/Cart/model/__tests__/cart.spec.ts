import { describe, expect, it, beforeEach } from "@jest/globals";
import { setupStore } from "@/store";
import cartSlice from "../cart.slice";
import type AddItemToCartPayloadType from "@/entities/Cart/types/AddItemToCartPayload.type";

const MockItemCart1: AddItemToCartPayloadType = {
  productName: "Test Item",
  shopId: "maxima",
};
const MockItemCart2: AddItemToCartPayloadType = {
  productName: "Test Item 2",
  shopId: "rimi",
};

let store: ReturnType<typeof setupStore>;

beforeEach(() => {
  store = setupStore();
});

describe("Cart reducer", () => {
  it("should handle initial state", () => {
    const { list } = store.getState().cart;
    expect(list).toEqual([]);
  });

  it("should handle addItemToCart", () => {
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart1));
    const { list } = store.getState().cart;
    expect(list).toHaveLength(1);
    const [cartItem] = list;
    expect(cartItem).toMatchObject({
      id: expect.any(String),
      productName: MockItemCart1.productName,
      shopId: MockItemCart1.shopId,
    });
  });

  it("should handle removeItemFromCart", () => {
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart1));
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart2));
    const { list: initialList } = store.getState().cart;
    const [itemToRemove] = initialList;
    store.dispatch(cartSlice.actions.removeItemFromCart(itemToRemove.id));
    const { list: updatedList } = store.getState().cart;
    expect(updatedList).toHaveLength(1);
    const [remainingItem] = updatedList;
    expect(remainingItem).toMatchObject({
      id: expect.any(String),
      productName: MockItemCart2.productName,
      shopId: MockItemCart2.shopId,
    });
  });
});
