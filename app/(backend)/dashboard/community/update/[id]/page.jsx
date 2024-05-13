import NewBlogForm from "@/components/backoffice/formComponents/NewBlogForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";

const UpdateBlog = async ({ params: { id } }) => {
  const blogData = await getData(`blogs/${id}`);
  //GETTING DATA AND MANUPILATE IT TO GET WHAT WE NEED
  const categoriesData = await getData("categories");

  //getting only id and name of the category
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader headerTitle="Update Blog" />
      <NewBlogForm categories={categories} updateData={blogData} />
    </div>
  );
};

export default UpdateBlog;
