import { ProductInfo } from "@/features/ProductInfo";
import { render } from "@testing-library/react";

describe("ProductForm", () => {
  it("Should render ProductForm without crashing", () => {
    const { container } = render(<ProductInfo />);
    expect(container).toBeTruthy();
  });
});
