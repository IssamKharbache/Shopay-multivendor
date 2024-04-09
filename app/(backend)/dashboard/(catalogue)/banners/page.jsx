import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        heading="Banners"
        link="/dashboard/banners/new"
        buttonTitle="Add banner"
      />
      <TableActions />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default page;
