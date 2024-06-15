import AccessDenied from "@/components/AccessDenied";
import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const Staff = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
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
