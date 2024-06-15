import AccessDenied from "@/components/AccessDenied";
import NewBannerForm from "@/components/backoffice/formComponents/NewBannerForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";

const UpdateBanner = async ({ params: { id } }) => {
  const bannerData = await getData(`banners/${id}`);
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      <FormHeader headerTitle="Update Banner" />
      <NewBannerForm bannerData={bannerData} />
    </div>
  );
};

export default UpdateBanner;
