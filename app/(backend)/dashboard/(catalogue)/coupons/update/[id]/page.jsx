import AccessDenied from "@/components/AccessDenied";
import CouponForm from "@/components/backoffice/formComponents/CouponForm";

import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";

const UpdateCoupon = async ({ params: { id } }) => {
  const couponData = await getData(`coupons/${id}`);

  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role === "USER") {
    return <AccessDenied />;
  }

  return (
    <div>
      <FormHeader headerTitle="Update coupon" />
      <CouponForm couponData={couponData} />
    </div>
  );
};

export default UpdateCoupon;
