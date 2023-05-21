import defaultPageStyles from "./defaultPage.module.scss";
import { ShopCart } from "@/widgets/ShopCart";
import { ProjectInfo } from "@/features/ProjectInfo";

const DefaultPage = () => {
  return (
    <div className={defaultPageStyles["default-page"]}>
      <ShopCart />
      <ProjectInfo />
    </div>
  );
};

export default DefaultPage;
