import { describe, expect, it } from '@jest/globals';
import store from "@/store";
import cartSlice from "../cart.slice";

const MockItemCart1 = { id: '1', name: 'Test Item', shop: 'maxima' };
const MockItemCart2 = { id: '2', name: 'Test Item 2', shop: 'rimi' };

describe('Cart reducer', () => {
  it('should handle initial state', () => {
    const { list } = store.getState().cart;
    expect(list).toEqual([]);
  });

  it('should handle addItemToCart', () => {
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart1));
    const { list } = store.getState().cart;
    expect(list).toEqual([MockItemCart1]);
  });

  it('should handle removeItemFromCart', () => {
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart1));
    store.dispatch(cartSlice.actions.addItemToCart(MockItemCart2));
    store.dispatch(cartSlice.actions.removeItemFromCart(MockItemCart1.id));
    const { list } = store.getState().cart;
    expect(list).toEqual([MockItemCart2]);
  });
});
