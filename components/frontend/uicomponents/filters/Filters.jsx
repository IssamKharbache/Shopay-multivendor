import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";

const Filters = ({ slug, isSearch }) => {
  return (
    <div>
      <PriceFilter slug={slug} isSearch={isSearch} />
    </div>
  );
};

export default Filters;
