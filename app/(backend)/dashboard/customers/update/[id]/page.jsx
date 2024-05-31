import CustomerForm from "@/components/backoffice/formComponents/CustomerForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";

const UpdateCustomer = async ({ params: { id } }) => {
  const user = await getData(`users/${id}`);
  return (
    <div>
      <FormHeader headerTitle="Update Customer" />
      <CustomerForm user={user?.userProfile} />
    </div>
  );
};

export default UpdateCustomer;
