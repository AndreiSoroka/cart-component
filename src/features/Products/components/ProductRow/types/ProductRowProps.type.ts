type ProductRowProps = {
  id: string;
  product: string;
  shopName: string;
  onRemove?: (id: string) => void;
};

export default ProductRowProps;
