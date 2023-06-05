import service from "@/shared/api/service";

const getShopsApi = () =>
  service.api.getShops().then(
    (response) => response.data,
    (response) => {
      throw new Error(response.error?.errorMessage);
    }
  );

export default getShopsApi;
