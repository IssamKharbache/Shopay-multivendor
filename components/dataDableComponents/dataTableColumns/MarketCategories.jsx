import { getData } from "@/lib/getData";

const MarketCategories = async ({ row }) => {
  const categoriesIds = row.getValue("categoryIds");
  return categoriesIds.forEach(async (cat, i) => {
    const res = await getData(`/categories/${cat}`);
    return res.forEach((title) => {
      return <div>{title}</div>;
    });
  });
};

export default MarketCategories;
