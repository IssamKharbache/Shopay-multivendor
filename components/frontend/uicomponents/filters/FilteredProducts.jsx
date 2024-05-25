import { getData } from "@/lib/getData";
import React from "react";
import Product from "../Product";
import Paginate from "./Paginate";

const FilteredProducts = async ({ products, productCount, isSearch }) => {
  //PAGINATION
  const pageSize = 3;
  const totalProductCount = productCount;
  const totalPages = Math.ceil(totalProductCount / pageSize);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product, i) => {
            return <Product product={product} key={i} />;
          })
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-center text-3xl font-semibold">No result</h1>
          </div>
        )}
      </div>
      <div className="p-8 mx-auto flex items-center justify-center ">
        {products.length > 0 ? (
          <Paginate
            totalPages={totalPages}
            isSearch={isSearch}
            productCount={productCount}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
