import { describe, expect, it } from "@jest/globals";
import isShopItems from "../isShopItems.guard";

describe("isShopItems function", () => {
  it("should return true for valid ShopItem array", () => {
    const validShopItems = [
      { id: "1", name: "Shop 1", sortOrder: 3 },
      { id: "2", name: "Shop 2", sortOrder: 2 },
      { id: "3", name: "Shop 3", sortOrder: 1 },
    ];
    expect(isShopItems(validShopItems)).toBe(true);
  });

  it("should return false for invalid ShopItem array", () => {
    const invalidShopItems = [
      { id: "1", name: "Shop 1", sortOrder: 3 },
      { id: 2, name: "Shop 2", sortOrder: "2" },
    ];
    expect(isShopItems(invalidShopItems)).toBe(false);
  });

  it("should return false for ShopItem array with missing properties", () => {
    const missingPropertiesShopItems = [
      { id: "1", name: "Shop 1", sortOrder: 3 },
      { id: "2", name: "Shop 2" },
    ];
    expect(isShopItems(missingPropertiesShopItems)).toBe(false);
  });

  it("should return false for non-array data", () => {
    const nonArrayData = { id: "1", name: "Shop 1", sortOrder: 3 };
    expect(isShopItems(nonArrayData)).toBe(false);
  });

  it("should return false for null", () => {
    const nullData = null;
    expect(isShopItems(nullData)).toBe(false);
  });

  it("should return false for undefined", () => {
    const undefinedData = undefined;
    expect(isShopItems(undefinedData)).toBe(false);
  });
});
