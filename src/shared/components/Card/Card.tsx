import React from "react";
import CartStyle from "@/shared/components/Card/card.module.scss";

type CardProps = {
  children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={CartStyle.card}>{children}</div>;
};

export default Card;
