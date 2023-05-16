import ButtonStyle from "./button.module.scss";
import type ButtonProps from "@/components/Button/types/ButtonProps.type";

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={ButtonStyle.button} {...props}>
      {label}
    </button>
  );
};
