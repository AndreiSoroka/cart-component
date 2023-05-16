import ButtonStyle from "./button.module.scss";
import type ButtonProps from "@/components/Button/types/ButtonProps.type";

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button type="submit" className={ButtonStyle.button} onClick={onClick}>
      {label}
    </button>
  );
};
