import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import NewBannerForm from "@/components/backoffice/formComponents/NewBannerForm";

const NewBanner = () => {
  return (
    <div>
      <FormHeader headerTitle="New Banner" />
      <NewBannerForm />
    </div>
  );
};

export default NewBanner;
