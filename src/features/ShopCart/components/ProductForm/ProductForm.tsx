import React, { useState } from "react";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Input/Select";
import { Button } from "@/components/Button/Button";
import type Option from "@/components/Input/types/Option.type";

type ProductFormProps = {
  stores: Option[];
  onSubmit: (product: { productName: string; store: string }) => void;
  isLoading: boolean;
};
const ProductForm = ({ stores, isLoading, onSubmit }: ProductFormProps) => {
  const [productName, setProductName] = useState("");
  const [store, setStore] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      productName,
      store,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={productName} onChange={setProductName} placeholder="123" />
      <Select
        options={stores}
        defaultValue={store}
        onChange={setStore}
        placeholder="123"
      />
      <Button label="Add" />
    </form>
  );
};

export default ProductForm;
