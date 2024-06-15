import PageHeader from "@/components/backoffice/PageHeader";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/dataDableComponents/data-table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccessDenied from "@/components/AccessDenied";

const Markets = async () => {
  const markets = await getData("markets");
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      <PageHeader
        heading="Markets"
        link="/dashboard/markets/new"
        buttonTitle="Add Market"
      />
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={markets} columns={columns} filterKeys={["title"]} />
      </div>
    </div>
  );
};

export default Markets;
