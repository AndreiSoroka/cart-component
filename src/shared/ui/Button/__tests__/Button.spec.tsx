import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders the label", () => {
    const text = "Click me!";
    const element = render(<Button label={text} />);
    const textContent =
      element.baseElement.querySelector("button")?.textContent || "";
    expect(textContent).toBe(text);
  });
  it("handles click events", () => {
    const handleClick = jest.fn();
    const element = render(<Button label="Click me" onClick={handleClick} />);
    const $el = element.baseElement.querySelector("button") as Element;
    fireEvent.click($el);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
