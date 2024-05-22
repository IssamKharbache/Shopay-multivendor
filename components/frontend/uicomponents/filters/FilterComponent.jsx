import BreadCrumb from "./BreadCrumb";
import FilteredProducts from "./FilteredProducts";
import Filters from "./Filters";

import Sorting from "./Sorting";

const FilterComponent = ({ category, products }) => {
  const { title, slug } = category;

  return (
    <div>
      <div className=" space-y-4 py-8 px-4 ">
        {/* BREAD CRUMB */}
        <BreadCrumb title={title} />
        {/*  */}
        <Sorting title={title} slug={slug} />
        <div className="grid grid-cols-12 py-8 gap-4">
          <div className="col-span-3">
            <Filters slug={slug} />
          </div>
          <div className="col-span-9">
            <FilteredProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
