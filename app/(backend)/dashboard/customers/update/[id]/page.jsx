import AccessDenied from "@/components/AccessDenied";
import CustomerForm from "@/components/backoffice/formComponents/CustomerForm";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

const UpdateCustomer = async ({ params: { id } }) => {
  const user = await getData(`users/${id}`);
  //block access
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      <FormHeader headerTitle="Update Customer" />
      <CustomerForm user={user?.userProfile} />
    </div>
  );
};

export default UpdateCustomer;
