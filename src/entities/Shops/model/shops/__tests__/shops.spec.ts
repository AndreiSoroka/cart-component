import { describe, expect, it, beforeEach } from "@jest/globals";
import shopsSlice from "../shops.slice";
import { getShops } from "@/entities/Shops/api/getShops.api";
import store from "@/store";
import fetchMock from "jest-fetch-mock";

const MockShop1 = { id: "1", name: "Shop 1", sortOrder: 1 };
const MockShop2 = { id: "2", name: "Shop 2", sortOrder: 2 };
const MockShop3 = { id: "3", name: "Shop 3", sortOrder: 3 };
const MockShops = [MockShop2, MockShop1, MockShop3];
const MockShopsCorrectOrder = [MockShop1, MockShop2, MockShop3];

fetchMock.enableMocks();

describe("Shops reducer", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should nothing", () => {
    store.dispatch(shopsSlice.actions.noop());
    const { list } = store.getState().shops;
    expect(list).toEqual([]);
  });

  it("should handle initial state", () => {
    const { list, isLoading, error } = store.getState().shops;
    expect(list).toEqual([]);
    expect(isLoading).toBe(false);
    expect(error).toBe("");
  });

  it("should handle getShops", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(MockShops));

    await store.dispatch(getShops());
    const { list, isLoading, error } = store.getState().shops;
    expect(list).toEqual(MockShopsCorrectOrder);
    expect(isLoading).toBe(false);
    expect(error).toBe("");
  });

  it("should handle getShops error", async () => {
    fetchMock.mockResponseOnce("", { status: 500 });

    await store.dispatch(getShops());
    const { error, isLoading } = store.getState().shops;
    expect(error).toContain("invalid json response");
    expect(isLoading).toBe(false);
  });

  it("should throw error when fetch returns invalid data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ test: 3 }]));

    await store.dispatch(getShops());
    const { error, isLoading } = store.getState().shops;
    expect(error).toBe("Something wrong");
    expect(isLoading).toBe(false);
  });

  it("should handle error when fetch is rejected without a message", async () => {
    const errorWithoutMessage = new Error();
    fetchMock.mockRejectOnce(errorWithoutMessage);

    await store.dispatch(getShops());
    const { error, isLoading } = store.getState().shops;
    expect(error).toBe("Something wrong");
    expect(isLoading).toBe(false);
  });
});
