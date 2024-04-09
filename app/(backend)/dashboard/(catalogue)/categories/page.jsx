import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";

const Categories = () => {
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Categories"
        link="/dashboard/categories/new"
        buttonTitle="Add category"
      />
      {/* TABLE  ACTIONS*/}
      <TableActions />
      {/* TABLE */}
    </div>
  );
};

export default Categories;
