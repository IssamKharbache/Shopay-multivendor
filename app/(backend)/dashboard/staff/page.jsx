import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";

const Staff = () => {
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Staff Members"
        link="/dashboard/staff/new"
        buttonTitle="Add Staff member"
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

export default Staff;
