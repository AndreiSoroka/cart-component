import type { ForwardedRef } from "react";
import React, { forwardRef } from "react";
import InputStyle from "./input.module.scss";
import type InputProps from "./types/InputProps.type";

export const Input = forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      required = false,
      maxlength = 255,
      type = "text",
      dataTestId,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={InputStyle.input}
        required={required}
        maxLength={maxlength}
        data-testid={dataTestId}
      />
    );
  }
);
