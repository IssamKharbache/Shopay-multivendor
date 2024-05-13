import NewCategoryForm from "@/components/backoffice/formComponents/NewCategoryForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";

const UpdateCategory = async ({ params: { id } }) => {
  const categoryEditData = await getData(`categories/${id}`);

  return (
    <div>
      <FormHeader headerTitle="Update Category" />
      <NewCategoryForm categoryEditData={categoryEditData} />
    </div>
  );
};

export default UpdateCategory;
