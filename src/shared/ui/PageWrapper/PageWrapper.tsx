import React from "react";
import PageWrapperStyle from "./pageWrapper.module.scss";

type CardProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const PageWrapper = ({ children }: CardProps) => {
  return <div className={PageWrapperStyle.wrapper}>{children}</div>;
};

export default PageWrapper;
