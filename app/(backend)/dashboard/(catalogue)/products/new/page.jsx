import AccessDenied from "@/components/AccessDenied";
import NewProductForm from "@/components/backoffice/formComponents/NewProductForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";

const NewProduct = async () => {
  //GETTING DATA AND MANUPILATE IT TO GET WHAT WE NEED
  const categoriesData = await getData("categories");

  //getting only id and name of the category
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  const sellersData = await getData("sellers");

  //getting only id and name of the seller
  const sellers = sellersData.map((seller) => {
    return {
      id: seller.id,
      title: seller.name,
    };
  });
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role === "USER") {
    return <AccessDenied />;
  }
  return (
    <div>
      <FormHeader headerTitle="New Product" />
      <NewProductForm categories={categories} sellers={sellers} />
    </div>
  );
};

export default NewProduct;
