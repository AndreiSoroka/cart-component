import type Option from "./Option.type";

type SelectProps = {
  options: Option[];
  defaultValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default SelectProps;
