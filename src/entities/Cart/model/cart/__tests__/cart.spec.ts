import { describe, expect, it } from "@jest/globals";
import { setupStore } from "@/store";
import cartSlice from "../cart.slice";
import type CartItem from "@/entities/Cart/types/Cart.type";

const store = setupStore();
const MockItemCart1: CartItem = {
  id: "1",
  productName: "Test Item",
  shopId: "maxima",
};
const MockItemCart2: CartItem = {
  id: "2",
  productName: "Test Item 2",
  shopId: "rimi",
};

describe("Cart reducer", () => {
  it("should handle initial state", () => {
    const { list } = store.getState().cart;
    expect(list).toEqual([]);
  });

  it("should handle addItemToCart", () => {
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart1));
    const { list } = store.getState().cart;
    expect(list).toEqual([MockItemCart1]);
  });

  it("should handle removeItemFromCart", () => {
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart1));
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart2));
    store.dispatch(cartSlice.actions.removeItemFromCart(MockItemCart1.id));
    const { list } = store.getState().cart;
    expect(list).toEqual([MockItemCart2]);
  });
});
