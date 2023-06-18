import PageWrapper from "@/shared/ui/PageWrapper/PageWrapper.tsx";
import { ShopCartWidget } from "@/widgets/ShopCart";
import { ProjectInfo } from "@/entities/ProjectInfo";

const DefaultPage = () => {
  return (
    <PageWrapper>
      <ShopCartWidget />
      <ProjectInfo />
    </PageWrapper>
  );
};

export default DefaultPage;
