import AccessDenied from "@/components/AccessDenied";
import NewMarketForm from "@/components/backoffice/formComponents/NewMarketForm";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
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
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }

  return <NewMarketForm marketData={marketData} categories={categories} />;
};

export default UpdateMarket;
