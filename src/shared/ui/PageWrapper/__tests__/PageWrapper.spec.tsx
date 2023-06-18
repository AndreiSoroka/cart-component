import { render } from "@testing-library/react";
import PageWrapper from "../PageWrapper.tsx";

describe("Card", () => {
  it("should render without crashing", () => {
    const { container } = render(<PageWrapper />);
    expect(container).toBeTruthy();
  });

  it("should render children correctly", () => {
    const { getByText } = render(<PageWrapper>Test content</PageWrapper>);
    expect(getByText("Test content")).toBeInTheDocument();
  });
});
