import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

const Blogs = async () => {
  const blogs = await getData("blogs");
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Shopay Community blogs"
        link="/dashboard/community/new"
        buttonTitle="Add Blog"
      />
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={blogs} columns={columns} />
      </div>
    </div>
  );
};

export default Blogs;
