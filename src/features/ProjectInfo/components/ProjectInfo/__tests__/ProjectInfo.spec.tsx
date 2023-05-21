import { ProjectInfo } from "@/features/ProjectInfo";
import { render } from "@testing-library/react";

describe("ProductForm", () => {
  it("Should render ProductForm without crashing", () => {
    const { container } = render(<ProjectInfo />);
    expect(container).toBeTruthy();
  });
});
