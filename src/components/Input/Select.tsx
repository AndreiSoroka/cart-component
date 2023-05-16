import React from "react";
import type SelectProps from "@/components/Input/types/SelectProps.type";
import InputStyle from "@/components/Input/input.module.scss";

const Select = ({
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

export default Select;
