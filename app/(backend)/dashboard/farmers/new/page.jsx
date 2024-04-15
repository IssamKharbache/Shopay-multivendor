"use client";

import FormHeader from "@/components/backoffice/formComponents/FormHeader";
import NewFarmerForm from "@/components/newFarmerForm";

const NewFarmer = () => {
  return (
    <div>
      <FormHeader headerTitle="New Farmer" />
      <NewFarmerForm />
    </div>
  );
};

export default NewFarmer;
