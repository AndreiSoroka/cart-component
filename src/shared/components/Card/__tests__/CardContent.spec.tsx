import { render } from "@testing-library/react";
import CardContent from "@/shared/components/Card/CardContent";

describe("CardContent", () => {
  it("should render without crashing", () => {
    const { container } = render(<CardContent />);
    expect(container).toBeTruthy();
  });

  it("should render children correctly", () => {
    const { getByText } = render(<CardContent>Test content</CardContent>);
    expect(getByText("Test content")).toBeInTheDocument();
  });
});
