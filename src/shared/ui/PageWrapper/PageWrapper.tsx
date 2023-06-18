import PageWrapperStyle from "./pageWrapper.module.scss";
import type PageWrapperProps from "./types/PageWrapperProps.type.ts";

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className={PageWrapperStyle.wrapper}>{children}</div>;
};

export default PageWrapper;
