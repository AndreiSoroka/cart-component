import RowStyle from "./productRow.module.scss";
import type ProductRowProps from "@/features/Products/components/ProductRow/types/ProductRowProps.type";
import { RemoveLink } from "@/shared/components/RemoveLink/RemoveLink";

const ProductRow = ({
  product,
  shopName,
  onRemove,
  elementKey = 0,
}: ProductRowProps) => {
  const rowStyles =
    elementKey % 2
      ? `${RowStyle["product-row"]} ${RowStyle["product-row--odd-element"]}`
      : RowStyle["product-row"];

  return (
    <div className={rowStyles} data-testid="productRow">
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
            onClick={onRemove}
            dataTestId="productRow__removeLink"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
