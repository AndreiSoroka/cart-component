import { getError } from "@/shared/lib/logger/logger";
describe("getError function", () => {
  it("should return the same Error instance if an Error is passed", () => {
    const error = new Error("Test error");
    const result = getError(error);
    expect(result).toBe(error);
  });

  it("should return a new Error with same message if a string is passed", () => {
    const message = "Test error message";
    const result = getError(message);
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe(message);
  });

  it("should return a new Error with stringified object if an object is passed", () => {
    const message = { error: "Test error message" };
    const result = getError(message);
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe(JSON.stringify(message, null, 2));
  });

  it("should return a new Error with default message if no message or an unhandled type is passed", () => {
    const defaultResult = getError();
    expect(defaultResult).toBeInstanceOf(Error);
    expect(defaultResult.message).toBe("Something wrong");

    const numberResult = getError(123);
    expect(numberResult).toBeInstanceOf(Error);
    expect(numberResult.message).toBe("Something wrong");
  });
});
