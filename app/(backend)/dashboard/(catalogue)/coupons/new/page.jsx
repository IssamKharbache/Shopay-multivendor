import CouponForm from "@/components/backoffice/formComponents/CouponForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";

const NewCoupon = async () => {
  return (
    <div>
      <FormHeader headerTitle="New Coupon" />
      <CouponForm />
    </div>
  );
};

export default NewCoupon;
