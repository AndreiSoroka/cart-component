import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { Row } from "../Row";
import RowStyle from "../row.module.scss";

describe("Row", () => {
  const defaultProps = {
    product: "Test Product",
    market: "Test Market",
    onRemove: jest.fn(),
    elementKey: 0,
  };

  it("renders the product and market", () => {
    const { container } = render(<Row {...defaultProps} />);
    const html = container?.innerHTML || "";
    expect(html).toContain(defaultProps.product);
    expect(html).toContain(defaultProps.market);
  });

  it("handles remove link click events", () => {
    const element = render(<Row {...defaultProps} />);
    const removeLink = element.getByText("Delete");
    fireEvent.click(removeLink);
    expect(defaultProps.onRemove).toHaveBeenCalledTimes(1);
  });

  it("has correct style for odd elementKey", () => {
    const { container } = render(<Row {...defaultProps} />);
    const element = container.firstElementChild;
    expect(element?.classList.contains(RowStyle.row)).toBeTruthy();
    expect(
      element?.classList.contains(RowStyle["row--odd-element"])
    ).toBeTruthy();
  });

  it("has correct style for even elementKey", () => {
    const props = { ...defaultProps, elementKey: 1 };
    const { container } = render(<Row {...props} />);
    const element = container.firstElementChild;
    expect(element?.classList.contains(RowStyle.row)).toBeTruthy();
    expect(
      element?.classList.contains(RowStyle["row--odd-element"])
    ).toBeFalsy();
  });
});
