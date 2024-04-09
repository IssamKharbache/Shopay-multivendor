import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";

const Products = () => {
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Products"
        link="/dashboard/products/new"
        buttonTitle="Add Product"
      />
      {/* TABLE  ACTIONS*/}
      <TableActions />
      {/* TABLE */}
    </div>
  );
};

export default Products;
