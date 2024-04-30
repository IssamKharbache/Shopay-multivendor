import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";

const page = async () => {
  const banners = await getData("banners");
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
