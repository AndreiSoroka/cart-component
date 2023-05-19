import hasUniqueShopIds from "@/entities/Shops/lib/helpers/hasUniqueShopIds";
import type Shop from "@/entities/Shops/types/Shop.type";

describe("hasUniqueShopIds", () => {
  it("should return true when all ids are unique", () => {
    const data: Shop[] = [
      { id: "1", name: "Shop 1", sortOrder: 1 },
      { id: "2", name: "Shop 2", sortOrder: 2 },
      { id: "3", name: "Shop 3", sortOrder: 3 },
    ];
    expect(hasUniqueShopIds(data)).toBe(true);
  });

  it("should return false when there are duplicate ids", () => {
    const data: Shop[] = [
      { id: "1", name: "Shop 1", sortOrder: 1 },
      { id: "2", name: "Shop 2", sortOrder: 2 },
      { id: "1", name: "Shop 3", sortOrder: 3 },
    ];
    expect(hasUniqueShopIds(data)).toBe(false);
  });

  it("should return true when the list is empty", () => {
    const data: Shop[] = [];
    expect(hasUniqueShopIds(data)).toBe(true);
  });
});
