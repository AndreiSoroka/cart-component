import shopCartStyles from "./shopCart.module.scss";
import { ProductForm } from "@/features/ProductForm";

import { Products } from "@/features/Products";
import Card from "@/shared/components/Card/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getShops } from "@/entities/Shops/api/getShops.api";
import type { AppDispatch } from "@/store";
import environmentMeta from "@/shared/const/environment.meta";
import CardContent from "@/shared/components/Card/CardContent";

const ShopCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (environmentMeta.CLIENT && !environmentMeta.STORYBOOK) {
      dispatch(getShops());
    }
  }, [dispatch]);

  return (
    <div className={shopCartStyles["shop-cart"]}>
      <Card>
        <CardContent>
          <ProductForm />
        </CardContent>
        <Products />
      </Card>
    </div>
  );
};

export default ShopCart;
