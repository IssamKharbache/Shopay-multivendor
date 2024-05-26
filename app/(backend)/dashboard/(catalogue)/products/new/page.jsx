import NewProductForm from "@/components/backoffice/formComponents/NewProductForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";

const NewProduct = async () => {
  //GETTING DATA AND MANUPILATE IT TO GET WHAT WE NEED
  const categoriesData = await getData("categories");
  const usersData = await getData("users");

  //getting only id and name of the category
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <div>
      <FormHeader headerTitle="New Product" />
      <NewProductForm categories={categories} />
    </div>
  );
};

export default NewProduct;
