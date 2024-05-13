import PageHeader from "@/components/backoffice/PageHeader";

import DataTable from "@/components/dataDableComponents/data-table";

import { columns } from "./columns";
import { getData } from "@/lib/getData";

const Categories = async () => {
  const categories = await getData("categories");
  return (
    <div className="px-8">
      {/* HEADER */}
      <PageHeader
        heading="Categories"
        link="/dashboard/categories/new"
        buttonTitle="Add category"
      />
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
};

export default Categories;
