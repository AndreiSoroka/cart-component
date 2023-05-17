import RowStyle from "./productRow.module.scss";
import type RowProps from "@/features/Products/components/ProductRow/types/ProductRowProps.type";
import { RemoveLink } from "@/shared/components/RemoveLink/RemoveLink";

export const ProductRow = ({
  product,
  market,
  onRemove,
  elementKey = 0,
}: RowProps) => {
  const rowStyles =
    elementKey % 2
      ? `${RowStyle.row} ${RowStyle["row--odd-element"]}`
      : RowStyle.row;

  return (
    <div className={rowStyles}>
      <div className={RowStyle.row__elements}>
        <div>{product}</div>
        <div>{market}</div>
        <div>
          <RemoveLink label="Delete" onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};
