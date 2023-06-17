type ProductFormBodyProps = {
  isDisabled: boolean;
  isLoading: boolean;
  options: { value: string; label: string }[];
  onSubmit: (payload: { productName: string; shopId: string }) => void;
};

export default ProductFormBodyProps;
