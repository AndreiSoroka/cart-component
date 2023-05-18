import createMapFromShops from "@/features/Products/lib/helpers/createMapFromShops";
describe("createMapFromShops", () => {
  it("returns an empty object if provided with an empty array", () => {
    const result = createMapFromShops([]);
    expect(result).toEqual({});
  });

  it("returns a map of shop ids to shop names", () => {
    const shops = [
      { id: "1", name: "Shop 1", sortOrder: 1 },
      { id: "2", name: "Shop 2", sortOrder: 2 },
    ];
    const result = createMapFromShops(shops);
    expect(result).toEqual({
      "1": "Shop 1",
      "2": "Shop 2",
    });
  });

  it("overwrites previous shops with the same id", () => {
    const shops = [
      { id: "1", name: "Shop 1", sortOrder: 1 },
      { id: "2", name: "Shop 2", sortOrder: 2 },
      { id: "2", name: "Shop 3", sortOrder: 3 },
    ];
    const result = createMapFromShops(shops);
    expect(result).toEqual({
      "1": "Shop 1",
      "2": "Shop 3",
    });
  });
});
