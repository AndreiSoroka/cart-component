import defaultPageStyles from "./defaultPage.module.scss";
import { ShopCart } from "@/widgets/ShopCart";
import { ProductInfo } from "@/features/ProductInfo";

const DefaultPage = () => {
  return (
    <div className={defaultPageStyles["default-page"]}>
      <ShopCart />
      <ProductInfo />
    </div>
  );
};

export default DefaultPage;
