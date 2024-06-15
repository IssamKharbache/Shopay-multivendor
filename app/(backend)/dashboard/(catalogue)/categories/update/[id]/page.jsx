import AccessDenied from "@/components/AccessDenied";
import NewCategoryForm from "@/components/backoffice/formComponents/NewCategoryForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

const UpdateCategory = async ({ params: { id } }) => {
  const categoryEditData = await getData(`categories/${id}`);

  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <div>
      <FormHeader headerTitle="Update Category" />
      <NewCategoryForm categoryEditData={categoryEditData} />
    </div>
  );
};

export default UpdateCategory;
