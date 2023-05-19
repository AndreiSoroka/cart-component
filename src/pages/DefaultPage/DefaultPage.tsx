import { ShopCart } from "@/widgets/ShopCart";
import defaultPageStyles from "./defaultPage.module.scss";

const DefaultPage = () => {
  return (
    <div className={defaultPageStyles["default-page"]}>
      <ShopCart />
    </div>
  );
};

export default DefaultPage;
