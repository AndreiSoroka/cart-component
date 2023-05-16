import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Select from "../Select";
import type SelectProps from "../types/SelectProps.type";

describe("Select", () => {
  const options: SelectProps["options"] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders the select with the correct default value", () => {
    const handleChange = jest.fn();
    const defaultValue = "option1";
    const element = render(
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    );
    const selectValue =
      element.baseElement.querySelector("select")?.value || "";
    expect(selectValue).toBe(defaultValue);
  });

  it("renders the select options correctly", () => {
    const handleChange = jest.fn();
    const defaultValue = "option1";
    const element = render(
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    );
    const selectOptions = Array.from(
      element.baseElement.querySelectorAll("select > option")
    ).map((option) => option.textContent);
    expect(selectOptions).toEqual(options.map((option) => option.label));
  });

  it("renders the placeholder correctly", () => {
    const handleChange = jest.fn();
    const defaultValue = "";
    const placeholder = "Please select an option";
    const element = render(
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    );
    const selectPlaceholder = element.baseElement.querySelector(
      "select > option:disabled"
    )?.textContent;
    expect(selectPlaceholder).toBe(placeholder);
  });

  it("handles change events", () => {
    const handleChange = jest.fn();
    const defaultValue = "option1";
    const element = render(
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    );
    const $el = element.baseElement.querySelector("select") as Element;
    fireEvent.change($el, { target: { value: "option2" } });
    expect(handleChange).toHaveBeenCalledWith("option2");
  });
});
