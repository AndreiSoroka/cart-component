import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "@/store";

import { Row } from "./components/Row/Row";
import ProductForm from "@/features/ShopCart/components/ProductForm/ProductForm";

import cartSlice from "./stores/cart/cart.slice";
import { getShops } from "@/features/ShopCart/stores/shops/shops.slice";
import type { AnyAction } from "@reduxjs/toolkit";

export const ShopCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // todo fix
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getShops() as AnyAction);
  }, [dispatch]);

  const list = useSelector((state: RootState) => state.cart.list);

  const { shopsList, isLoading } = useSelector((state: RootState) => ({
    isLoading: state.shops.isLoading,
    shopsList: [...state.shops.list]
      .sort((a, b) => {
        if (a.sortOrder === b.sortOrder) {
          return a.name.localeCompare(b.name);
        }
        return a.sortOrder - b.sortOrder;
      })
      .map((item) => ({ value: item.id, label: item.name })),
  }));

  const handleAddToCart = (product: { productName: string; store: string }) => {
    dispatch(
      cartSlice.actions.addItemToCart({
        id: Math.random().toString(),
        name: product.productName,
        shop: product.store,
      })
    );
  };

  const removeFromCart = (id: string) => {
    dispatch(cartSlice.actions.removeItemFromCart(id));
  };

  const listItems = list.map((item, index) => (
    <Row
      key={item.id}
      elementKey={index}
      market={item.shop}
      product={item.name}
      onRemove={() => removeFromCart(item.id)}
    />
  ));

  return (
    <div>
      <ProductForm
        onSubmit={handleAddToCart}
        stores={shopsList}
        isLoading={isLoading}
      />
      <div>{listItems}</div>
    </div>
  );
};
