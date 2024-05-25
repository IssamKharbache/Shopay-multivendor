"use client";

import { setCurrentStep } from "@/redux/slices/onboardingSellerSlice";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import NavButtons from "../NavButtons";
import { generateUserCode } from "@/lib/generateUserCode";
import { makePostRequest } from "@/lib/apiRequest";

const SummaryForm = ({ sellerId }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //checkout slice
  const dispatch = useDispatch();

  const currentStep = useSelector(
    (store) => store.onboardingSeller.currentStep
  );
  const onboardingFormData = useSelector(
    (store) => store.onboardingSeller.onboardingFormData
  );

  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };
  //submitting data
  const submitData = async () => {
    //get both the order items and the form information
    const data = {
      ...onboardingFormData,
    };
    const fullName = `${data.firstName} ${data.lastName}`;

    //generate the farmer unique code code
    const sellerUniqueCode = generateUserCode("SP", fullName);
    data.code = sellerUniqueCode;
    data.userId = sellerId;
    console.log(data);
    // makePostRequest(setLoading, "api/sellers", data, "Seller Account");
  };

  return (
    <div>
      <h1>Summary</h1>
      <div className="mt-8 flex gap-8">
        {currentStep > 1 && (
          <button
            onClick={handlePreviousStep}
            className="flex items-center  gap-4 justify-center font-semibold text-xl w-full  rounded-md p-4 mt-6 bg-slate-300 hover:bg-slate-400   dark:bg-gray-700 dark:hover:bg-gray-950 duration-200"
            type="button"
          >
            <ChevronLeft className=" w-5 h-5 mr-2 duration-300" />
            <span>Previous Step</span>
          </button>
        )}

        <button
          onClick={submitData}
          className="flex items-center  gap-4 justify-center font-semibold text-xl w-full  rounded-md p-4 mt-6 bg-slate-300 hover:bg-slate-400   dark:bg-gray-700 dark:hover:bg-gray-950 duration-200"
        >
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default SummaryForm;
