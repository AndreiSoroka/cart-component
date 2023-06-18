import type dataTestId from "@/shared/types/dataTestId.type";

type CommonInputProps = dataTestId & {
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

export default CommonInputProps;
