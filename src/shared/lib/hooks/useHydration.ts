import { useEffect, useState } from "react";

const useHydration = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    isClient,
  };
};

export default useHydration;
