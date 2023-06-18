import { renderWithProviders } from "@/shared/config/jest/renderWithProviders.tsx";
import ShopCartWidget from "@/widgets/ShopCart/ui/ShopCartWidget/ShopCartWidget.tsx";

describe("ShopCartWidget", () => {
  it("Should render ShopCart without crashing", () => {
    const { container } = renderWithProviders(<ShopCartWidget />);
    expect(container).toBeTruthy();
  });
});
