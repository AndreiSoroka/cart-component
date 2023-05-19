import { ProductForm } from "@/features/ProductForm";

import { Products } from "@/features/Products";
import Card from "@/shared/components/Card/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShops } from "@/entities/Shops/api/getShops.api";
import type { AppDispatch } from "@/store";
import environmentMeta from "@/shared/const/environment.meta";

const ShopCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (environmentMeta.CLIENT) {
      dispatch(getShops());
    }
  }, [dispatch]);

  return (
    <Card>
      <ProductForm />
      <Products />
    </Card>
  );
};

export default ShopCart;
