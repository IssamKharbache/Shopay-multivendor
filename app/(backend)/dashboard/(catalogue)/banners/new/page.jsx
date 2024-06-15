import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import NewBannerForm from "@/components/backoffice/formComponents/NewBannerForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccessDenied from "@/components/AccessDenied";

const NewBanner = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      <FormHeader headerTitle="New Banner" />
      <NewBannerForm />
    </div>
  );
};

export default NewBanner;
