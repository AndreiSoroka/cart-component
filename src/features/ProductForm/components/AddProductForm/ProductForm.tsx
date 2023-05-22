import React, { useMemo, useRef, useState } from "react";
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

  const { isLoading, isLoaded, list: shopsList } = useShopsStore();
  const { addItemToCart } = useCartStore();

  const options = shopsList.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const isDisabled = useMemo(() => {
    return !isLoaded || isLoading;
  }, [isLoaded, isLoading]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItemToCart({
      id: nanoid(),
      productName: productName,
      shopId,
    });
    inputRef.current?.focus();
    inputRef.current?.select();
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
          onChange={setProductName}
          placeholder="Name"
          ref={inputRef}
          maxlength={30}
          required
          dataTestId="productForm__productName"
        />
        <Select
          options={options}
          defaultValue={shopId}
          onChange={setShopId}
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
