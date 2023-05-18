import { renderWithProviders } from "@/shared/config/jest/renderWithProviders";
import ShopCart from "@/widgets/ShopCart/components/ShopCart";

describe("ShopCart", () => {
  it("Should render ShopCart without crashing", () => {
    const { container } = renderWithProviders(<ShopCart />);
    expect(container).toBeTruthy();
  });
});
