import React, { useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/shared/components/Input/Input";
import { Select } from "@/shared/components/Input/Select";
import Button from "@/shared/components/Button/Button";
import ProductFormStyle from "./productForm.module.scss";
import { selectShopsDisabled, selectShopsList } from "@/entities/Shops";
import { addItemToCart } from "@/entities/Cart";

const ProductForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [productName, setProductName] = useState("");
  const [shopId, setShopId] = useState("");

  const setProductNameMemo = useCallback((name: string) => {
    setProductName(name);
  }, []);

  const setShopIdMemo = useCallback((id: string) => {
    setShopId(id);
  }, []);

  const shopsList = useSelector(selectShopsList);
  const isDisabled = useSelector(selectShopsDisabled);

  const options = useMemo(
    () =>
      shopsList.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [shopsList]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addItemToCart({
        productName,
        shopId,
      })
    );
    setProductName("");
    inputRef.current?.focus();
  };

  return (
    <div data-testid="productForm">
      <h2 className={ProductFormStyle.title}>Add to cart:</h2>
      <form className={ProductFormStyle.form} onSubmit={handleSubmit}>
        <Input
          value={productName}
          onChange={setProductNameMemo}
          placeholder="Name"
          ref={inputRef}
          maxlength={30}
          required
          dataTestId="productForm__productName"
        />
        <Select
          options={options}
          defaultValue={shopId}
          onChange={setShopIdMemo}
          placeholder={isDisabled ? "Loading shops..." : "Select shop"}
          required
          dataTestId="productForm__shopId"
        />
        <Button
          disabled={isDisabled}
          label="Add"
          dataTestId="productForm__submitButton"
        />
      </form>
    </div>
  );
};

export default ProductForm;
