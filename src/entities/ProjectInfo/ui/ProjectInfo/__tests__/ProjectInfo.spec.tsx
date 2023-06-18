import { ProjectInfo } from "@/entities/ProjectInfo";
import { render } from "@testing-library/react";

describe("ProductForm", () => {
  it("Should render AddProductToCart without crashing", () => {
    const { container } = render(<ProjectInfo />);
    expect(container).toBeTruthy();
  });
});
