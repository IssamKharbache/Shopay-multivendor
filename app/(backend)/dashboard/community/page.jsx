import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import AccessDenied from "@/components/AccessDenied";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const Blogs = async () => {
  const blogs = await getData("blogs");
  //block access
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
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
        <DataTable data={blogs} columns={columns} filterKeys={["title"]} />
      </div>
    </div>
  );
};

export default Blogs;
