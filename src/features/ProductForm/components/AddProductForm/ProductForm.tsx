import React, { useCallback, useMemo, useRef, useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { Select } from "@/shared/components/Input/Select";
import Button from "@/shared/components/Button/Button";
import { useShopsStore } from "@/entities/Shops";
import { useCartStore } from "@/entities/Cart";
import ProductFormStyle from "./productForm.module.scss";
import { nanoid } from "@reduxjs/toolkit";

const ProductForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [productName, setProductName] = useState("");
  const [shopId, setShopId] = useState("");

  const setProductNameMemo = useCallback((name: string) => {
    setProductName(name);
  }, []);

  const setShopIdMemo = useCallback((id: string) => {
    setShopId(id);
  }, []);

  const { isLoading, isLoaded, list: shopsList } = useShopsStore();
  const { addItemToCart } = useCartStore();

  const options = useMemo(
    () =>
      shopsList.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [shopsList]
  );

  const isDisabled = useMemo(() => {
    return !isLoaded || isLoading;
  }, [isLoaded, isLoading]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItemToCart({
      id: nanoid(),
      productName,
      shopId,
    });
    setProductName("");
    inputRef.current?.focus();
  };

  return (
    <div className={ProductFormStyle["product-form"]} data-testid="productForm">
      <h2 className={ProductFormStyle["product-form__title"]}>Add to cart:</h2>
      <form
        className={ProductFormStyle["product-form__form"]}
        onSubmit={handleSubmit}
      >
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
