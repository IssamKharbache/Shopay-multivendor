import PageHeader from "@/components/backoffice/PageHeader";

import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

const Coupons = async () => {
  const coupons = await getData("coupons");
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Coupons"
        link="/dashboard/coupons/new"
        buttonTitle="Add Coupon"
      />
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={coupons} columns={columns} />
      </div>
    </div>
  );
};

export default Coupons;
