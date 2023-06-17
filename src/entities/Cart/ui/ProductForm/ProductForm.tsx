import React, { useCallback, useRef, useState } from "react";
// shared
import { Input } from "@/shared/ui/Input/Input";
import { Select } from "@/shared/ui/Input/Select";
import Button from "@/shared/ui/Button/Button";
// local
import type ProductFormBodyProps from "./types/ProductFormBodyProps.type.ts";
import ProductFormStyle from "./productForm.module.scss";

const ProductForm = ({
  isLoading,
  isDisabled,
  options,
  onSubmit,
}: ProductFormBodyProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [productName, setProductName] = useState("");
  const [shopId, setShopId] = useState("");

  const setProductNameMemo = useCallback((name: string) => {
    setProductName(name);
  }, []);

  const setShopIdMemo = useCallback((id: string) => {
    setShopId(id);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      productName,
      shopId: shopId,
    });
    setProductName("");
    inputRef.current?.focus();
  };

  return (
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
        placeholder={isLoading ? "Loading shops..." : "Select shop"}
        required
        dataTestId="productForm__shopId"
      />
      <Button
        disabled={isLoading || isDisabled}
        label="Add"
        dataTestId="productForm__submitButton"
      />
    </form>
  );
};

export default ProductForm;
