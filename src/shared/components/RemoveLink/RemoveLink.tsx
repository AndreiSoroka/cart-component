import RemoveLinkStyle from "./removeLink.module.scss";
import type RemoveLinkProps from "./types/RemoveLinkProps.type";

export const RemoveLink = ({ label, onClick, dataTestId }: RemoveLinkProps) => {
  return (
    <span
      data-test-el="remove-link"
      className={RemoveLinkStyle["remove-link"]}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {label}
    </span>
  );
};
