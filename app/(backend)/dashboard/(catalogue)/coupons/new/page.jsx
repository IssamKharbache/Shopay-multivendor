import AccessDenied from "@/components/AccessDenied";
import CouponForm from "@/components/backoffice/formComponents/CouponForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const NewCoupon = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role === "USER") {
    return <AccessDenied />;
  }
  return (
    <div>
      <FormHeader headerTitle="New Coupon" />
      <CouponForm />
    </div>
  );
};

export default NewCoupon;
