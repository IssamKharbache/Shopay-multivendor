import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";

const Categories = () => {
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Shopay Community blogs"
        link="/dashboard/community/new"
        buttonTitle="Add Blog"
      />
      {/* TABLE  ACTIONS*/}
      <TableActions />
      {/* TABLE */}
    </div>
  );
};

export default Categories;
