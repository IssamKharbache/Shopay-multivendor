import PageHeader from "@/components/backoffice/PageHeader";

import DataTable from "@/components/dataDableComponents/data-table";

import { columns } from "./columns";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccessDenied from "@/components/AccessDenied";

const Categories = async () => {
  const categories = await getData("categories");
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
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
        <DataTable data={categories} columns={columns} filterKeys={["title"]} />
      </div>
    </div>
  );
};

export default Categories;
