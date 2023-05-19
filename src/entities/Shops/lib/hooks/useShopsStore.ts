import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const useShopsStore = () => {
  const shops = useSelector((state: RootState) => state.shops);
  return { ...shops };
};

export default useShopsStore;
