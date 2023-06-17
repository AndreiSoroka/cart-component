import { useDispatch, useSelector } from "react-redux";
// shared
import Title from "@/shared/ui/Title/Title.tsx";
// entities
import { selectShopsDisabled, selectShopsOptions } from "@/entities/Shops";
import { addItemToCart, ProductForm } from "@/entities/Cart";

const AddProductToCart = () => {
  const dispatch = useDispatch();

  const options = useSelector(selectShopsOptions);
  const isDisabled = useSelector(selectShopsDisabled);

  const handleSubmit = (payload: { productName: string; shopId: string }) => {
    dispatch(addItemToCart(payload));
  };

  return (
    <div data-testid="productForm">
      <Title content="Add to cart:" />
      <ProductForm
        isDisabled={isDisabled}
        isLoading={isDisabled}
        options={options}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddProductToCart;
