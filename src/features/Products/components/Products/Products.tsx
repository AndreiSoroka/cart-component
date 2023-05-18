import { useCartStore } from "@/entities/Cart";
import { useShopsStore } from "@/entities/Shops";
import { useMemo } from "react";
import createMapFromShops from "@/features/Products/lib/helpers/createMapFromShops";
import ProductRow from "@/features/Products/components/ProductRow/ProductRow";

const Products = () => {
  const { list: products, removeItemFromCart } = useCartStore();
  const { list: shops } = useShopsStore();

  const shopsMap = useMemo(() => createMapFromShops(shops), [shops]);

  return (
    <>
      {products.map((item, index) => (
        <ProductRow
          key={item.id}
          elementKey={index}
          shopName={shopsMap[item.shopId] || "..."}
          product={item.productName}
          onRemove={() => removeItemFromCart(item.id)}
        />
      ))}
    </>
  );
};
export default Products;
