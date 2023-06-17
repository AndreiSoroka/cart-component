import TitleStyle from "./title.module.scss";
import type TitleProps from "./types/TitleProps.type";
import { memo } from "react";

const Title = memo(({ content, dataTestId }: TitleProps) => {
  return (
    <h2 data-testid={dataTestId} className={TitleStyle.title}>
      {content}
    </h2>
  );
});

export default Title;
