import BreadCrumb from "./BreadCrumb";
import FilteredProducts from "./FilteredProducts";
import Filters from "./Filters";

import Sorting from "./Sorting";

const FilterComponent = ({ category, products }) => {
  const { title, slug } = category;
  const productCount = category?.products?.length;

  return (
    <div>
      <div className=" space-y-4 py-8 px-4 ">
        {/* BREAD CRUMB */}
        <BreadCrumb title={title} resultCount={productCount} />
        {/*  */}
        <Sorting isSearch={category?.isSearch} title={title} slug={slug} />
        <div className="grid grid-cols-12 py-8 gap-8">
          <div className="col-span-3">
            <Filters slug={slug} isSearch={category?.isSearch} />
          </div>
          <div className="col-span-9">
            <FilteredProducts
              isSearch={category?.isSearch}
              productCount={productCount}
              products={products}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
