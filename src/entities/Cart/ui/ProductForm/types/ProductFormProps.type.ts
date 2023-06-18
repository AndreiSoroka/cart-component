import type ProductFormPayload from "./ProductFormPayload.type.ts";

type ProductFormProps = {
  isDisabled: boolean;
  isLoading: boolean;
  options: { value: string; label: string }[];
  onSubmit: (payload: ProductFormPayload) => void;
};

export default ProductFormProps;
