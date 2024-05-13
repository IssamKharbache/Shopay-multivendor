import PageHeader from "@/components/backoffice/PageHeader";

import { getData } from "@/lib/getData";
import { columns } from "./columns";
import DataTable from "@/components/dataDableComponents/data-table";

const Products = async () => {
  const products = await getData("products");
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Products"
        link="/dashboard/products/new"
        buttonTitle="Add Product"
      />
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
};

export default Products;
