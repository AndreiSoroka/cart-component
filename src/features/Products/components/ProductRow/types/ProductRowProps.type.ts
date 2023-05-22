type ProductRowProps = {
  id: string;
  product: string;
  shopName: string;
  onRemove?: (id: string) => void;
  elementKey?: number;
};

export default ProductRowProps;
