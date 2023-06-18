import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { RemoveLink } from "../RemoveLink";

describe("Button", () => {
  it("renders the label", () => {
    const text = "Click me!";
    const { container } = render(
      <RemoveLink label={text} dataTestId="button" />
    );
    const textContent =
      container.querySelector("[data-testid=button]")?.textContent || "";
    expect(textContent).toBe(text);
  });
  it("handles click events", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <RemoveLink label="Click me" onClick={handleClick} dataTestId="button" />
    );
    const $el = container.querySelector("[data-testid=button]") as Element;
    fireEvent.click($el);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
