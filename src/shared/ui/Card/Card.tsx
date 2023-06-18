import type CardProps from "./types/CardProps.type.ts";
import CartStyle from "./card.module.scss";

const Card = ({ children }: CardProps) => {
  return <div className={CartStyle.card}>{children}</div>;
};

export default Card;
