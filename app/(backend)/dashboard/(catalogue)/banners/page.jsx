import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccessDenied from "@/components/AccessDenied";

const page = async () => {
  const banners = await getData("banners");

  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      <PageHeader
        heading="Banners"
        link="/dashboard/banners/new"
        buttonTitle="Add banner"
      />
      {/* TABLE */}
      <div>
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
};

export default page;
