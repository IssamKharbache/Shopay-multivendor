import PageHeader from "@/components/backoffice/PageHeader";

import TableActions from "@/components/backoffice/TableActions";

const Coupons = () => {
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Coupons"
        link="/dashboard/coupons/new"
        buttonTitle="Add Coupon"
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

export default Coupons;
