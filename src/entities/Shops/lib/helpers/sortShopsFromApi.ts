import type Shop from "@/entities/Shops/types/Shop.type";

export default function sortShopsFromApi(data: Shop[]): Shop[] {
  return [...data].sort((a, b) => {
    if (a.sortOrder === b.sortOrder) {
      return a.name.localeCompare(b.name);
    }
    return a.sortOrder - b.sortOrder;
  });
}
