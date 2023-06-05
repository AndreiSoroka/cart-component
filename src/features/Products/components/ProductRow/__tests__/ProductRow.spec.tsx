import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import ProductRow from "../ProductRow";
import type ProductRowProps from "@/features/Products/components/ProductRow/types/ProductRowProps.type";

describe("Row", () => {
  const defaultProps: ProductRowProps = {
    id: "1",
    product: "Test Product",
    shopName: "Test Market",
    onRemove: jest.fn(),
  };

  it("should renders the product and market", () => {
    const { container } = render(<ProductRow {...defaultProps} />);
    const html = container?.innerHTML || "";
    expect(html).toContain(defaultProps.product);
    expect(html).toContain(defaultProps.shopName);
  });

  it("should handles remove link click events", () => {
    const element = render(<ProductRow {...defaultProps} />);
    const removeLink = element.getByText("Delete");
    fireEvent.click(removeLink);
    expect(defaultProps.onRemove).toHaveBeenCalledTimes(1);
  });
});
