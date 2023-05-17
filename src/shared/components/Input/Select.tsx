import React from "react";
import type SelectProps from "./types/SelectProps.type";
import InputStyle from "./input.module.scss";

export const Select = ({
  options,
  defaultValue,
  onChange,
  placeholder,
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const placeholderOption = placeholder ? (
    <option disabled value="">
      {placeholder}
    </option>
  ) : null;

  return (
    <select
      value={defaultValue}
      onChange={handleChange}
      className={`${InputStyle.input} ${InputStyle.input__select}`}
    >
      {placeholderOption}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
