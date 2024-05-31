import NewMarketForm from "@/components/backoffice/formComponents/NewMarketForm";
import { getData } from "@/lib/getData";
import React from "react";

const UpdateMarket = async ({ params: { id } }) => {
  //GETTING DATA AND MANUPILATE IT TO GET WHAT WE NEED
  const categoriesData = await getData("categories");

  //getting only id and name of the category
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  const marketData = await getData(`markets/${id}`);

  return <NewMarketForm marketData={marketData} categories={categories} />;
};

export default UpdateMarket;
