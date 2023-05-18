import { render } from "@testing-library/react";
import Card from "@/shared/components/Card/Card";

describe("Card", () => {
  it("should render without crashing", () => {
    const { container } = render(<Card />);
    expect(container).toBeTruthy();
  });

  it("should render children correctly", () => {
    const { getByText } = render(<Card>Test content</Card>);
    expect(getByText("Test content")).toBeInTheDocument();
  });
});
