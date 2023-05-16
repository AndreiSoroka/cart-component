import RowStyle from "./row.module.scss";
import type RowProps from "@/features/ShopCart/components/Row/types/RowProps.type";
import { RemoveLink } from "@/components/RemoveLink/RemoveLink";

export const Row = ({
  product,
  market,
  onRemove,
  elementKey = 0,
}: RowProps) => {
  const rowStyles =
    elementKey % 2
      ? RowStyle.row
      : `${RowStyle.row} ${RowStyle["row--odd-element"]}`;

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
