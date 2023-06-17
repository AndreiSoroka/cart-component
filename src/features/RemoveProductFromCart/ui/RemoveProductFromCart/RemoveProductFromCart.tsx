import { useCallback } from "react";
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
  const handleRemove = useCallback(() => {
    dispatch(removeItemFromCart(id));
  }, [dispatch, id]);

  return (
    <RemoveLink label="Delete" onClick={handleRemove} dataTestId={dataTestId} />
  );
};

export default RemoveProductFromCart;
