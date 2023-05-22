import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import type { RootState } from "@/store";
import cartSlice from "@/entities/Cart/model/cart/cart.slice";
import type Cart from "@/entities/Cart/types/Cart.type";

const useCartStore = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addItemToCart = useCallback(
    (item: Cart) => {
      dispatch(cartSlice.actions.addItemToCart(item));
    },
    [dispatch]
  );

  const removeItemFromCart = useCallback(
    (id: string) => {
      dispatch(cartSlice.actions.removeItemFromCart(id));
    },
    [dispatch]
  );

  return { ...cart, addItemToCart, removeItemFromCart };
};
export default useCartStore;
