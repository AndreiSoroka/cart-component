import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { RemoveLink } from "../RemoveLink";

describe("Button", () => {
  it("renders the label", () => {
    const text = "Click me!";
    const element = render(<RemoveLink label={text} />);
    const textContent =
      element.baseElement.querySelector("span")?.textContent || "";
    expect(textContent).toBe(text);
  });
  it("handles click events", () => {
    const handleClick = jest.fn();
    const element = render(
      <RemoveLink label="Click me" onClick={handleClick} />
    );
    const $el = element.baseElement.querySelector("span") as Element;
    fireEvent.click($el);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
