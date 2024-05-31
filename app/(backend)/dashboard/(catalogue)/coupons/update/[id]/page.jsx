import CouponForm from "@/components/backoffice/formComponents/CouponForm";

import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";

const UpdateCoupon = async ({ params: { id } }) => {
  const couponData = await getData(`coupons/${id}`);

  return (
    <div>
      <FormHeader headerTitle="Update coupon" />
      <CouponForm couponData={couponData} />
    </div>
  );
};

export default UpdateCoupon;
