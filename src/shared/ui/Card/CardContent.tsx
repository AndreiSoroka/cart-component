import type CardProps from "./types/CardProps.type.ts";
import CartStyle from "./card.module.scss";

const CardContent = ({ children }: CardProps) => {
  return <div className={CartStyle.content}>{children}</div>;
};

export default CardContent;
