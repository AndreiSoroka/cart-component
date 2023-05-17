import React, { useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { Select } from "@/shared/components/Input/Select";
import { Button } from "@/shared/components/Button/Button";
import { useShopsStore } from "@/entities/Shops";
import { useCartStore } from "@/entities/Cart";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [storeId, setStoreId] = useState("");

  const { isLoading, list: shopsList } = useShopsStore();
  const { addItemToCart } = useCartStore();

  const options = shopsList.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItemToCart({
      id: Math.random().toString(),
      name: productName,
      shop: storeId,
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={productName} onChange={setProductName} placeholder="123" />
      <Select
        options={options}
        defaultValue={storeId}
        onChange={setStoreId}
        placeholder="Select shop"
      />
      <Button label="Add" />
    </form>
  );
};

export default ProductForm;
