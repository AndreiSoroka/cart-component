import React, { useMemo, useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { Select } from "@/shared/components/Input/Select";
import { Button } from "@/shared/components/Button/Button";
import { useShopsStore } from "@/entities/Shops";
import { useCartStore } from "@/entities/Cart";
import environmentMeta from "@/shared/const/environment.meta";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [shopId, setShopId] = useState("");

  const { isLoading, isLoaded, list: shopsList } = useShopsStore();
  const { addItemToCart } = useCartStore();

  const options = shopsList.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const isDisabled = useMemo(() => {
    return !isLoaded || isLoading || environmentMeta.SSR;
  }, [isLoaded, isLoading]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItemToCart({
      id: Math.random().toString(),
      productName: productName,
      shopId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={productName}
        onChange={setProductName}
        placeholder="Type product"
      />
      <Select
        options={options}
        defaultValue={shopId}
        onChange={setShopId}
        placeholder={isDisabled ? "Loading shops..." : "Select shop"}
      />
      <Button disabled={isDisabled} label="Add" />
    </form>
  );
};

export default ProductForm;
