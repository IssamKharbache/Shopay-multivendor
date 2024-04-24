"use client";

import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import NewFarmerForm from "@/components/backoffice/formComponents/NewFarmerForm";

const NewFarmer = () => {
  return (
    <div>
      <FormHeader headerTitle="New Farmer" />
      <NewFarmerForm />
    </div>
  );
};

export default NewFarmer;
