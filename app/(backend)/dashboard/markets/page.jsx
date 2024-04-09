import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

const Markets = () => {
  return (
    <div>
      <PageHeader
        heading="Markets"
        link="/dashboard/markets/new"
        buttonTitle="Add Market"
      />
      <TableActions />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Markets;
