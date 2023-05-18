import sortShopsFromApi from "@/entities/Shops/lib/helpers/sortShopsFromApi";

describe("sortShopsFromApi", () => {
  it("should sort shops by sortOrder", () => {
    const MockShop1 = { id: "1", name: "Shop A", sortOrder: 1 };
    const MockShop2 = { id: "2", name: "Shop B", sortOrder: 2 };
    const MockShop3 = { id: "3", name: "Shop C", sortOrder: 3 };
    const sortedShops = sortShopsFromApi([MockShop2, MockShop1, MockShop3]);
    expect(sortedShops).toEqual([MockShop1, MockShop2, MockShop3]);
  });

  it("should sort shops by name when sortOrder is the same", () => {
    const MockShop1 = { id: "1", name: "Shop A", sortOrder: 1 };
    const MockShop2 = { id: "2", name: "Shop B", sortOrder: 1 };
    const MockShop3 = { id: "3", name: "Shop C", sortOrder: 1 };
    const sortedShops = sortShopsFromApi([MockShop2, MockShop1, MockShop3]);
    expect(sortedShops).toEqual([MockShop1, MockShop2, MockShop3]);
  });
});
