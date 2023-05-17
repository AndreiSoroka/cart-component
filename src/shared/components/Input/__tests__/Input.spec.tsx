import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { Input } from "../Input";

describe("Input", () => {
  it("renders the input with the correct initial value", () => {
    const handleChange = jest.fn();
    const initialValue = "Initial value";
    const element = render(
      <Input value={initialValue} onChange={handleChange} />
    );
    const inputValue = element.baseElement.querySelector("input")?.value || "";
    expect(inputValue).toBe(initialValue);
  });

  it("renders the input with the correct placeholder", () => {
    const handleChange = jest.fn();
    const placeholder = "Enter text";
    const element = render(
      <Input value="" placeholder={placeholder} onChange={handleChange} />
    );
    const inputPlaceholder =
      element.baseElement.querySelector("input")?.placeholder || "";
    expect(inputPlaceholder).toBe(placeholder);
  });

  it("handles change events", () => {
    const handleChange = jest.fn();
    const element = render(<Input value="" onChange={handleChange} />);
    const $el = element.baseElement.querySelector("input") as Element;
    fireEvent.change($el, { target: { value: "Changed value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
