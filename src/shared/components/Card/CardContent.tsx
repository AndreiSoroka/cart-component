import React from "react";
import CartStyle from "@/shared/components/Card/card.module.scss";

type CardProps = {
  children?: React.ReactNode;
};

const CardContent = ({ children }: CardProps) => {
  return <div className={CartStyle.content}>{children}</div>;
};

export default CardContent;
