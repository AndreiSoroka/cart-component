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
      ? `${RowStyle.row} ${RowStyle["row--odd-element"]}`
      : RowStyle.row;

  return (
    <div className={rowStyles}>
      <div className={RowStyle.row__elements}>
        <div>{product}</div>
        <div>{shopName}</div>
        <div className={RowStyle.row__actions}>
          <RemoveLink label="Delete" onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
