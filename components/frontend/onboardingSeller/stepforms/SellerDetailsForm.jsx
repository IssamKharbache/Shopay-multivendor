"use client";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";

import ArrayItemsInput from "@/components/backoffice/inputformComponents/ArrayItemsInput";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";
import {
  setCurrentStep,
  updateOnboardingFormData,
} from "@/redux/slices/onboardingSellerSlice";
import { useState } from "react";

const SellerDetailsForm = () => {
  const [products, setProducts] = useState([]);

  const existingFormData = useSelector(
    (store) => store.onboardingSeller.onboardingFormData
  );
  const currentStep = useSelector(
    (store) => store.onboardingSeller.currentStep
  );
  //get dispatcher
  const dispatch = useDispatch();
  //submit form function
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
      isExperienced: true,
    },
  });
  const isExperienced = watch("isExperienced");

  const onSubmit = async (data) => {
    data.products = products;
    //update the checkout data
    dispatch(updateOnboardingFormData(data));
    //then update the current step
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mt-6 mb-4  text-gray-950 dark:text-gray-200">
        Seller Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Who can we contact when we can't reach you"
          name="contactPerson"
          placeHolder="His or her Full Name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Contact Person Phone"
          name="contactPersonPhone"
          type="number"
          placeHolder="His or her Contact Person Phone"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What's the main product that you sell?"
          name="mainProduct"
          placeHolder="Your Main Product"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What's Your business Name?(optional)"
          name="mainProduct"
          placeHolder="Your Business Name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <h1 className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 mb-2">
          Do You Sell Other Products ?
        </h1>
        <ArrayItemsInput
          itemTitle="Product"
          setItems={setProducts}
          items={products}
        />
        <ToggleInput
          label="Do you have any experience selling that product?"
          nameWatched="isExperienced"
          isTrue={isExperienced}
          trueTitle="Yes"
          falseTitle="No"
          register={register}
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default SellerDetailsForm;
