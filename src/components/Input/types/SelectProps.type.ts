import type Option from "@/components/Input/types/Option.type";

type SelectProps = {
  options: Option[];
  defaultValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default SelectProps;
