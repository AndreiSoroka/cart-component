import React from "react";
import CartStyle from "@/shared/ui/Card/card.module.scss";

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={CartStyle.card}>{children}</div>;
};

export default Card;
