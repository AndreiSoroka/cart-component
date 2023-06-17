import type dataTestId from "@/shared/types/dataTestId.type";

type ButtonProps = dataTestId & {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default ButtonProps;
