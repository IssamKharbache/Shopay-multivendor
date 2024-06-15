import PageHeader from "@/components/backoffice/PageHeader";

import DataTable from "@/components/dataDableComponents/data-table";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccessDenied from "@/components/AccessDenied";

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
  if (role === "USER") {
    return <AccessDenied />;
  }
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
          <DataTable
            data={allCoupons}
            columns={columns}
            filterKeys={["title"]}
          />
        ) : (
          <DataTable
            data={farmerCoupons}
            columns={columns}
            filterKeys={["title"]}
          />
        )}
      </div>
    </div>
  );
};

export default Coupons;
