import { useDispatch } from "react-redux";
// shared
import { RemoveLink } from "@/shared/ui/RemoveLink/RemoveLink.tsx";
// entities
import { removeItemFromCart } from "@/entities/Cart";
// local
import type RemoveProductFromCartProps from "./types/RemoveProductFromCartProps.type.ts";

const RemoveProductFromCart = ({
  id,
  dataTestId,
}: RemoveProductFromCartProps) => {
  const dispatch = useDispatch();

  return (
    <RemoveLink
      label="Delete"
      onClick={() => dispatch(removeItemFromCart(id))}
      dataTestId={dataTestId}
    />
  );
};

export default RemoveProductFromCart;
