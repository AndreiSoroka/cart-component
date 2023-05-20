import { useCartStore } from "@/entities/Cart";
import { useShopsStore } from "@/entities/Shops";
import { useEffect, useMemo, useState } from "react";
import createMapFromShops from "@/features/Products/lib/helpers/createMapFromShops";
import ProductRow from "@/features/Products/components/ProductRow/ProductRow";

const Products = () => {
  const { list: products, removeItemFromCart } = useCartStore();
  const { list: shops } = useShopsStore();

  const shopsMap = useMemo(() => createMapFromShops(shops), [shops]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Disable hydration on the client side because we have data in localStorage
  if (!isClient) {
    return <div />;
  }
  return (
    <div>
      {products.map((item, index) => (
        <ProductRow
          key={item.id}
          elementKey={index}
          shopName={shopsMap[item.shopId] || "..."}
          product={item.productName}
          onRemove={() => removeItemFromCart(item.id)}
        />
      ))}
    </div>
  );
};
export default Products;
