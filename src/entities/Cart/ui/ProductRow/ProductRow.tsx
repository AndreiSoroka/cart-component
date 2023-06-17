import { memo } from "react";
// local
import type ProductRowProps from "./types/ProductRowProps.type.ts";
import productRowStyle from "./productRow.module.scss";

const ProductRow = memo(
  ({ product, shopName, slotActions }: ProductRowProps) => {
    return (
      <div className={productRowStyle.row} data-testid="productRow">
        <div className={productRowStyle.elements}>
          <div
            className={productRowStyle.text}
            data-testid="productRow__productName"
          >
            {product}
          </div>
          <div
            className={productRowStyle.text}
            data-testid="productRow__shopName"
          >
            {shopName}
          </div>
          <div className={productRowStyle.actions}>{slotActions}</div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.product === nextProps.product &&
    prevProps.shopName === nextProps.shopName
);

export default ProductRow;
