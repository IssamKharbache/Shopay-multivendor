import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";

const Farmers = () => {
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Farmers"
        link="/dashboard/farmers/new"
        buttonTitle="Add Farmer"
      />
      {/* TABLE  ACTIONS*/}
      <TableActions />
      {/* TABLE */}
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Farmers;
