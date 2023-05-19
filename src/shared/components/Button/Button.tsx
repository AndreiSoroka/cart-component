import ButtonStyle from "./button.module.scss";
import type ButtonProps from "./types/ButtonProps.type";

export const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={ButtonStyle.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
