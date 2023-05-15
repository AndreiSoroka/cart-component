import { describe, expect, it } from "@jest/globals";
import isShopItem from "../isShopItem.guard";

describe("isShopItem function", () => {
  it("should return true for valid ShopItem", () => {
    const validShopItem = { id: "1", name: "Shop 1", sortOrder: 3 };
    expect(isShopItem(validShopItem)).toBe(true);
  });

  it("should return false for invalid ShopItem", () => {
    const invalidShopItem = { id: 1, name: "Shop 1", sortOrder: "3" };
    expect(isShopItem(invalidShopItem)).toBe(false);
  });

  it("should return false for ShopItem with missing properties", () => {
    const missingPropertiesShopItem = { id: "1", name: "Shop 1" };
    expect(isShopItem(missingPropertiesShopItem)).toBe(false);
  });

  it("should return false for non-object data", () => {
    const nonObjectData = "invalid";
    expect(isShopItem(nonObjectData)).toBe(false);
  });

  it("should return false for null", () => {
    const nullData = null;
    expect(isShopItem(nullData)).toBe(false);
  });

  it("should return false for undefined", () => {
    const undefinedData = undefined;
    expect(isShopItem(undefinedData)).toBe(false);
  });
});
