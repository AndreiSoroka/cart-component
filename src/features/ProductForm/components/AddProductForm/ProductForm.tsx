import React, { useMemo, useState } from "react";
import { Input } from "@/shared/components/Input/Input";
import { Select } from "@/shared/components/Input/Select";
import { Button } from "@/shared/components/Button/Button";
import { useShopsStore } from "@/entities/Shops";
import { useCartStore } from "@/entities/Cart";
import environmentMeta from "@/shared/const/environment.meta";
import ProductFormStyle from "./productForm.module.scss";

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
    <div className={ProductFormStyle["product-form"]}>
      <h2 className={ProductFormStyle["product-form__title"]}>Add to cart:</h2>
      <form
        className={ProductFormStyle["product-form__form"]}
        onSubmit={handleSubmit}
      >
        <Input
          value={productName}
          onChange={setProductName}
          placeholder="Name"
        />
        <Select
          options={options}
          defaultValue={shopId}
          onChange={setShopId}
          placeholder={isDisabled ? "Loading shops..." : "Select shop"}
        />
        <Button disabled={isDisabled} label="Add" />
      </form>
    </div>
  );
};

export default ProductForm;
