import React from "react";
import CartStyle from "@/shared/ui/Card/card.module.scss";

type CardProps = {
  children?: React.ReactNode;
};

const CardContent = ({ children }: CardProps) => {
  return <div className={CartStyle.content}>{children}</div>;
};

export default CardContent;
