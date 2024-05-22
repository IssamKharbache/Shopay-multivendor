import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";

const Filters = ({ slug }) => {
  return (
    <div>
      <PriceFilter slug={slug} />
      <BrandFilter />
    </div>
  );
};

export default Filters;
