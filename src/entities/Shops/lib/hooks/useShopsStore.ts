import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { getShops } from "@/entities/Shops/api/getShops.api";
import { useEffect } from "react";

const useShopsStore = () => {
  const shops = useSelector((state: RootState) => state.shops);
  const dispatch = useDispatch<AppDispatch>();

  const { list, isLoading, error } = shops;

  useEffect(() => {
    // todo fix this
    if (list.length || isLoading || error) {
      return;
    }
    dispatch(getShops());
    // todo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...shops };
};

export default useShopsStore;
