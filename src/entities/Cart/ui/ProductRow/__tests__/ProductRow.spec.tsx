import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import ProductRow from "../ProductRow.tsx";
import type ProductRowProps from "@/entities/Cart/ui/ProductRow/types/ProductRowProps.type.ts";

describe("Row", () => {
  const defaultProps: ProductRowProps = {
    product: "Test Product",
    shopName: "Test Market",
  };

  it("should renders the product and market", () => {
    const { container } = render(<ProductRow {...defaultProps} />);
    const html = container?.innerHTML || "";
    expect(html).toContain(defaultProps.product);
    expect(html).toContain(defaultProps.shopName);
  });
});
