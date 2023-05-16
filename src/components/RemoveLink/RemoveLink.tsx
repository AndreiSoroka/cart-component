import RemoveLinkStyle from "./removeLink.module.scss";
import type RemoveLinkProps from "@/components/RemoveLink/types/RemoveLinkProps.type";

export const RemoveLink = ({ label, onClick }: RemoveLinkProps) => {
  return (
    <span className={RemoveLinkStyle["remove-link"]} onClick={onClick}>
      {label}
    </span>
  );
};
