import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import AccessDenied from "@/components/AccessDenied";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const Sellers = async () => {
  const sellers = await getData("sellers");

  const session = await getServerSession(authOptions);
  const role = session?.user?.role;

  if (role != "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <div>
      {/* HEADER */}

      {/* TABLE */}
      <div className="px-6">
        <DataTable
          data={sellers}
          columns={columns}
          //filter table keys
          filterKeys={["name", "email"]}
        />
      </div>
    </div>
  );
};

export default Sellers;
