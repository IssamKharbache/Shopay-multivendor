import PageHeader from "@/components/backoffice/PageHeader";

import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Heading from "@/components/backoffice/Heading";
import AccessDenied from "@/components/AccessDenied";

const Sales = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const sessionId = session?.user?.id;
  const role = session?.user?.role;
  const allSales = await getData("sales");
  const farmerSales = allSales.filter((sale) => sale.vendorId === sessionId);

  if (role != "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-semibold font-poppins dark:text-gray-300 text-gray-700 pb-8 pl-6">
        Sales
      </h1>
      {/* TABLE */}
      <div className="px-6">
        {role === "ADMIN" ? (
          <DataTable data={allSales} columns={columns} />
        ) : (
          <DataTable data={farmerSales} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Sales;
