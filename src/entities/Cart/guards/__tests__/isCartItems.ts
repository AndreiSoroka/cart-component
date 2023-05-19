import { describe, expect, it } from "@jest/globals";
import isCartItems from "../isCartItems.guard";
import type CartItem from "@/entities/Cart/types/Cart.type";

describe("isShopItems function", () => {
  it("should return true for valid ShopItem array", () => {
    const validShopItems: CartItem[] = [
      { id: "1", productName: "Shop 1", shopId: "3" },
      { id: "2", productName: "Shop 2", shopId: "2" },
      { id: "3", productName: "Shop 3", shopId: "1" },
    ];
    expect(isCartItems(validShopItems)).toBe(true);
  });

  it("should return false for invalid ShopItem array", () => {
    const invalidShopItems = [
      { id: "1", productName: "Shop 1", shopId: 3 },
      { id: 2, productName: "Shop 2", shopId: "2" },
    ];
    expect(isCartItems(invalidShopItems)).toBe(false);
  });

  it("should return false for ShopItem array with missing properties", () => {
    const missingPropertiesShopItems = [
      { id: "1", productName: "Shop 1", shopId: 3 },
      { id: "2", productName: "Shop 2" },
    ];
    expect(isCartItems(missingPropertiesShopItems)).toBe(false);
  });

  it("should return false for non-array data", () => {
    const nonArrayData = { id: "1", productName: "Shop 1", shopId: 3 };
    expect(isCartItems(nonArrayData)).toBe(false);
  });

  it("should return false for null", () => {
    const nullData = null;
    expect(isCartItems(nullData)).toBe(false);
  });

  it("should return false for undefined", () => {
    const undefinedData = undefined;
    expect(isCartItems(undefinedData)).toBe(false);
  });
});
