import NewCategoryForm from "@/components/backoffice/formComponents/NewCategoryForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";

const NewCatagory = () => {
  return (
    <div>
      <FormHeader headerTitle="New Category" />
      <NewCategoryForm />
    </div>
  );
};

export default NewCatagory;
