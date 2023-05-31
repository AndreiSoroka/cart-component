import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createMapFromShops from "@/features/Products/lib/helpers/createMapFromShops";
import ProductRow from "@/features/Products/components/ProductRow/ProductRow";
import { selectShopsList } from "@/entities/Shops";
import { removeItemFromCart, selectCartProducts } from "@/entities/Cart";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectCartProducts);
  const shops = useSelector(selectShopsList);
  const handleRemove = useCallback(
    (id: string) => dispatch(removeItemFromCart(id)),
    [dispatch]
  );
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
      {products.map((item) => (
        <ProductRow
          key={item.id}
          id={item.id}
          shopName={shopsMap[item.shopId] || "..."}
          product={item.productName}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};
export default Products;
