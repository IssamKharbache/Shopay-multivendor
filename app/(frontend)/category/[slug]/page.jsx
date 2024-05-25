import FilterComponent from "@/components/frontend/uicomponents/filters/FilterComponent";
import { getData } from "@/lib/getData";

const page = async ({ params: { slug }, searchParams }) => {
  const { sort = "asc", min = 0, max = "", page = 1 } = searchParams;

  const category = await getData(`categories/filter/${slug}`);

  //sorting products
  const products = await getData(
    `products?catId=${category.id}&page=${page}&sort=${sort}&min=${min}&max=${max}`
  );

  return (
    <div>
      <FilterComponent category={category} products={products} />
    </div>
  );
};

export default page;
