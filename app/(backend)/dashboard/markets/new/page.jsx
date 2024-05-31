import NewMarketForm from "@/components/backoffice/formComponents/NewMarketForm";
import { getData } from "@/lib/getData";

const NewMarket = async () => {
  //GETTING DATA AND MANUPILATE IT TO GET WHAT WE NEED
  const categoriesData = await getData("categories");

  //getting only id and name of the category
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return <NewMarketForm categories={categories} />;
};

export default NewMarket;
