import type CartItem from "@/entities/Cart/types/CartItem.type";

type AddItemToCartPayloadType = Omit<CartItem, "id">;

export default AddItemToCartPayloadType;
