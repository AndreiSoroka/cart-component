import ButtonStyle from "./button.module.scss";
import type ButtonProps from "./types/ButtonProps.type";

export const Button = ({
  label,
  onClick,
  dataTestId,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={ButtonStyle.button}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {label}
    </button>
  );
};
