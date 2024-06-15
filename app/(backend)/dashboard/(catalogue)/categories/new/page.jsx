import AccessDenied from "@/components/AccessDenied";
import NewCategoryForm from "@/components/backoffice/formComponents/NewCategoryForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const NewCatagory = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      <FormHeader headerTitle="New Category" />
      <NewCategoryForm />
    </div>
  );
};

export default NewCatagory;
