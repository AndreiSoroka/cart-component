import { useSelector } from "react-redux";
// shared
import useHydration from "@/shared/lib/hooks/useHydration.ts";
// entities
import { selectShopsList } from "@/entities/Shops";
import { selectCartProducts, ProductRow } from "@/entities/Cart";
// features
import { RemoveProductFromCart } from "@/features/RemoveProductFromCart";

const ProductsContainer = () => {
  const products = useSelector(selectCartProducts);
  const shops = useSelector(selectShopsList.selectEntities);

  const { isClient } = useHydration();
  // Disable hydration on the client side because we have data in localStorage
  if (!isClient) {
    return <div />;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductRow
          key={item.id}
          shopName={shops[item.shopId]?.name || "..."}
          product={item.productName}
          slotActions={
            <RemoveProductFromCart
              id={item.id}
              dataTestId="productContainer__removeLink"
            />
          }
        />
      ))}
    </div>
  );
};
export default ProductsContainer;
