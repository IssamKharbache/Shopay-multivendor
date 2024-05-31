import PageHeader from "@/components/backoffice/PageHeader";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/dataDableComponents/data-table";

const Markets = async () => {
  const markets = await getData("markets");
  return (
    <div>
      <PageHeader
        heading="Markets"
        link="/dashboard/markets/new"
        buttonTitle="Add Market"
      />
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={markets} columns={columns} />
      </div>
    </div>
  );
};

export default Markets;
