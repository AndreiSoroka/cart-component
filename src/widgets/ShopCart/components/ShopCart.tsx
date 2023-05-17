import { ProductForm } from "@/features/ProductForm";

import { Products } from "@/features/Products";
import Card from "@/shared/components/Card/Card";

const ShopCart = () => {
  return (
    <Card>
      <ProductForm />
      <Products />
    </Card>
  );
};

export default ShopCart;
