import type dataTestId from "@/shared/types/dataTestId.type";

type RemoveLinkProps = dataTestId & {
  label: string;
  onClick?: () => void;
};

export default RemoveLinkProps;
