import compareShopsByOrderAndName from "@/entities/Shops/lib/helpers/compareShopsByOrderAndName";

describe("compareShopsOrder", () => {
  it("should return a positive number if first shop sortOrder is greater than second", () => {
    const MockShop1 = { id: "1", name: "Shop A", sortOrder: 2 };
    const MockShop2 = { id: "2", name: "Shop B", sortOrder: 1 };

    expect(compareShopsByOrderAndName(MockShop1, MockShop2)).toBeGreaterThan(0);
  });

  it("should return a negative number if first shop sortOrder is less than second", () => {
    const MockShop1 = { id: "1", name: "Shop A", sortOrder: 1 };
    const MockShop2 = { id: "2", name: "Shop B", sortOrder: 2 };

    expect(compareShopsByOrderAndName(MockShop1, MockShop2)).toBeLessThan(0);
  });

  it("should return 0 if sortOrder is the same and names are equal", () => {
    const MockShop1 = { id: "1", name: "Shop A", sortOrder: 1 };
    const MockShop2 = { id: "2", name: "Shop A", sortOrder: 1 };

    expect(compareShopsByOrderAndName(MockShop1, MockShop2)).toEqual(0);
  });

  it("should return a positive number if sortOrder is the same but first shop name is later alphabetically", () => {
    const MockShop1 = { id: "1", name: "Shop B", sortOrder: 1 };
    const MockShop2 = { id: "2", name: "Shop A", sortOrder: 1 };

    expect(compareShopsByOrderAndName(MockShop1, MockShop2)).toBeGreaterThan(0);
  });

  it("should return a negative number if sortOrder is the same but first shop name is earlier alphabetically", () => {
    const MockShop1 = { id: "1", name: "Shop A", sortOrder: 1 };
    const MockShop2 = { id: "2", name: "Shop B", sortOrder: 1 };

    expect(compareShopsByOrderAndName(MockShop1, MockShop2)).toBeLessThan(0);
  });
});
