import { describe, expect, it } from "@jest/globals";
import isCartItem from "../isCartItem.guard";
import type CartItem from "@/entities/Cart/types/CartItem.type";

describe("isShopItem function", () => {
  it("should return true for valid ShopItem", () => {
    const validShopItem: CartItem = {
      id: "1",
      productName: "Shop 1",
      shopId: "shop3",
    };
    expect(isCartItem(validShopItem)).toBe(true);
  });

  it("should return false for invalid ShopItem", () => {
    const invalidShopItem = { id: 1, productName: "Shop 1", shopId: "shop3" };
    expect(isCartItem(invalidShopItem)).toBe(false);
  });

  it("should return false for ShopItem with missing properties", () => {
    const missingPropertiesShopItem = { id: "1", productName: "Shop 1" };
    expect(isCartItem(missingPropertiesShopItem)).toBe(false);
  });

  it("should return false for non-object data", () => {
    const nonObjectData = "invalid";
    expect(isCartItem(nonObjectData)).toBe(false);
  });

  it("should return false for null", () => {
    const nullData = null;
    expect(isCartItem(nullData)).toBe(false);
  });

  it("should return false for undefined", () => {
    const undefinedData = undefined;
    expect(isCartItem(undefinedData)).toBe(false);
  });
});
