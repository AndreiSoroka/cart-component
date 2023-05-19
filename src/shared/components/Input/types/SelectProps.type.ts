import type Option from "./Option.type";
import type CommonInputProps from "@/shared/components/Input/types/CommonInputProps.type";

type SelectProps = CommonInputProps & {
  options: Option[];
  defaultValue: string;
};

export default SelectProps;
