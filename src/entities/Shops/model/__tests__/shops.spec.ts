import { describe, expect, it, beforeEach } from "@jest/globals";
import { getShops } from "@/entities/Shops/api/getShops.api";
import { setupStore } from "@/store";
import fetchMock from "jest-fetch-mock";

const store = setupStore();
const MockShop1 = { id: "1", name: "Shop 1", sortOrder: 1 };
const MockShop2 = { id: "2", name: "Shop 2", sortOrder: 2 };
const MockShop3 = { id: "3", name: "Shop 3", sortOrder: 3 };
const MockShops = [MockShop2, MockShop1, MockShop3];

fetchMock.enableMocks();

describe("Shops reducer", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should handle initial state", () => {
    const { list, status, error } = store.getState().shops;
    expect(list).toMatchSnapshot();
    expect(status).toBe("idle");
    expect(error).toBe("");
  });

  it("should handle getShops", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(MockShops));

    await store.dispatch(getShops());
    const { list, status, error } = store.getState().shops;
    expect(list).toMatchSnapshot();
    expect(status).toBe("success");
    expect(error).toBe("");
  });

  it("should handle getShops normal error", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        errorId: "errorId",
        errorMessage: "errorMessage 123",
      }),
      { status: 500 }
    );

    await store.dispatch(getShops());
    const { status, error } = store.getState().shops;
    expect(status).toBe("error");
    expect(error).toBe("errorMessage 123");
  });

  it("should handle getShops error", async () => {
    fetchMock.mockResponseOnce("", { status: 500 });

    await store.dispatch(getShops());
    const { error, status } = store.getState().shops;
    expect(error).toContain("Something wrong");
    expect(status).toBe("error");
  });

  it("should handle error when fetch is rejected without a message", async () => {
    const errorWithoutMessage = new Error();
    fetchMock.mockRejectOnce(errorWithoutMessage);

    await store.dispatch(getShops());
    const { error, status } = store.getState().shops;
    expect(error).toBe("Something wrong");
    expect(status).toBe("error");
  });
});
