import NewFarmerForm from "@/components/backoffice/formComponents/NewSellerForm";
import { getData } from "@/lib/getData";
import React from "react";

const page = async ({ params: { id } }) => {
  const user = await getData(`users/${id}`);
  return (
    <div className="flex flex-col gap-6 m-10">
      <div className="max-w-4xl p-4 mx-auto">
        <h2 className="p-2 rounded-sm text-lg ">
          Hey{" "}
          <span className="text-blue-600 font-bold text-2xl">
            {user && user.name}
          </span>
          {""}, Tell Us More About Yourself,To Complete the verification step
        </h2>
      </div>
      <NewFarmerForm user={user} />
    </div>
  );
};

export default page;
