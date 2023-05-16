import React from "react";
import InputStyle from "./input.module.scss";
import type InputProps from "./types/InputProps.type";

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={InputStyle.input}
    />
  );
};
