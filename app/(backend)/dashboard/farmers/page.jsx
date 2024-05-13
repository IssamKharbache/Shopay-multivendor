import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

const Farmers = async () => {
  const farmers = await getData("farmers");
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Farmers"
        link="/dashboard/farmers/new"
        buttonTitle="Add Farmer"
      />

      {/* TABLE */}
      <div className="px-6">
        <DataTable
          data={farmers}
          columns={columns}
          filterKeys={["name", "email"]}
        />
      </div>
    </div>
  );
};

export default Farmers;
