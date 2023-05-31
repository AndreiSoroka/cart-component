import RemoveLinkStyle from "./removeLink.module.scss";
import type RemoveLinkProps from "./types/RemoveLinkProps.type";

export const RemoveLink = ({ label, onClick, dataTestId }: RemoveLinkProps) => {
  return (
    <button
      data-test-el="remove-link"
      className={RemoveLinkStyle.link}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {label}
    </button>
  );
};
