import PageHeader from "@/components/backoffice/PageHeader";

import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const Coupons = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const sessionId = session?.user?.id;
  const role = session?.user?.role;
  const allCoupons = await getData("coupons");
  const farmerCoupons = allCoupons.filter(
    (coupon) => coupon.vendorId === sessionId
  );

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
        {role === "ADMIN" ? (
          <DataTable data={allCoupons} columns={columns} />
        ) : (
          <DataTable data={farmerCoupons} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Coupons;
