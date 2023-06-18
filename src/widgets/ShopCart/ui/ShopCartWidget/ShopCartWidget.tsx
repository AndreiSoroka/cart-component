import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store.ts";
// shared
import environmentMeta from "@/shared/const/environment.meta.ts";
import Card from "@/shared/ui/Card/Card.tsx";
import CardContent from "@/shared/ui/Card/CardContent.tsx";
// entities
import { getShops } from "@/entities/Shops";
// features
import { AddProductToCart } from "@/features/AddProductToCart";
// local
import shopCartStyles from "./shopCartWidget.module.scss";
import ProductsContainer from "../ProductsContainer/ProductsContainer.tsx";

const ShopCartWidget = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!environmentMeta.STORYBOOK) {
      dispatch(getShops());
    }
  }, [dispatch]);

  return (
    <div className={shopCartStyles.wrapper}>
      <Card>
        <CardContent>
          <AddProductToCart />
        </CardContent>
        <ProductsContainer />
      </Card>
    </div>
  );
};

export default ShopCartWidget;
