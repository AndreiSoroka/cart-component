import type CommonInputProps from "@/shared/components/Input/types/CommonInputProps.type";

type InputProps = CommonInputProps & {
  value: string;
  type?: string;
  maxlength?: number;
};

export default InputProps;
