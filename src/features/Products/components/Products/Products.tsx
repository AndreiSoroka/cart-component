import { useCartStore } from "@/entities/Cart";
// todo rename
import { ProductRow } from "@/features/Products/components/ProductRow/ProductRow";

const Products = () => {
  // todo show market from shops
  // todo rename market to shopName
  const { list, removeItemFromCart } = useCartStore();

  return (
    <>
      {list.map((item, index) => (
        <ProductRow
          key={item.id}
          elementKey={index}
          market={item.shop}
          product={item.name}
          onRemove={() => removeItemFromCart(item.id)}
        />
      ))}
    </>
  );
};
export default Products;
