import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

const Sellers = async () => {
  const sellers = await getData("sellers");

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
