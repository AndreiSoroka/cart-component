import type Shop from "@/entities/Shops/types/Shop.type";

const sortShopsFromApi = (data: Shop[]): Shop[] =>
  [...data].sort((a, b) => {
    if (a.sortOrder === b.sortOrder) {
      return a.name.localeCompare(b.name);
    }
    return a.sortOrder - b.sortOrder;
  });
export default sortShopsFromApi;
