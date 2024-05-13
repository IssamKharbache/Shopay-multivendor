import NewBannerForm from "@/components/backoffice/formComponents/NewBannerForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";

const UpdateBanner = async ({ params: { id } }) => {
  const bannerData = await getData(`banners/${id}`);
  return (
    <div>
      <FormHeader headerTitle="Update Banner" />
      <NewBannerForm bannerData={bannerData} />
    </div>
  );
};

export default UpdateBanner;
