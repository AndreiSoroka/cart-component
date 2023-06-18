import type RemoveLinkProps from "./types/RemoveLinkProps.type";
import RemoveLinkStyle from "./removeLink.module.scss";

export const RemoveLink = ({ label, onClick, dataTestId }: RemoveLinkProps) => {
  return (
    <button
      className={RemoveLinkStyle.link}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {label}
    </button>
  );
};
