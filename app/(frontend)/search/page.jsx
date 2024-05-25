import FilterComponent from "@/components/frontend/uicomponents/filters/FilterComponent";

import { getData } from "@/lib/getData";
const Search = async ({ searchParams }) => {
  const {
    search = "",
    min = 0,
    max = "",
    sort = "asc",
    page = 1,
  } = searchParams;

  //sorting products
  const products = await getData(
    `products/search?search=${search}&page=${page}&sort=${sort}&min=${min}&max=${max}`
  );

  const category = { title: search, slug: "", products, isSearch: true };
  return (
    <div>
      <FilterComponent category={category} products={products} />
    </div>
  );
};

export default Search;
