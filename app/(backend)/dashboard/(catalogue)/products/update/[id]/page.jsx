import NewProductForm from "@/components/backoffice/formComponents/NewProductForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";

const UpdateProduct = async ({ params: { id } }) => {
  const productData = await getData(`products/${id}`);
  console.log(productData);
  //GETTING DATA AND MANUPILATE IT TO GET WHAT WE NEED
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const farmersData = usersData.filter((user) => user.role === "FARMER");
  //getting only id and name of the farmer
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });
  //getting only id and name of the category
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <div>
      <FormHeader headerTitle="Update Product" />
      <NewProductForm
        updateData={productData}
        categories={categories}
        farmers={farmers}
      />
    </div>
  );
};

export default UpdateProduct;
