import RowStyle from "./productRow.module.scss";
import type ProductRowProps from "@/features/Products/components/ProductRow/types/ProductRowProps.type";
import { RemoveLink } from "@/shared/components/RemoveLink/RemoveLink";
import { memo } from "react";

const ProductRow = memo(
  ({ product, shopName, onRemove, id }: ProductRowProps) => {
    return (
      <div className={RowStyle["product-row"]} data-testid="productRow">
        <div className={RowStyle["product-row__elements"]}>
          <div
            className={RowStyle["product-row__text"]}
            data-testid="productRow__productName"
          >
            {product}
          </div>
          <div
            className={RowStyle["product-row__text"]}
            data-testid="productRow__shopName"
          >
            {shopName}
          </div>
          <div className={RowStyle["product-row__actions"]}>
            <RemoveLink
              label="Delete"
              onClick={() => onRemove?.(id)}
              dataTestId="productRow__removeLink"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default ProductRow;
