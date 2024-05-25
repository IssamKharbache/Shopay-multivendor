"use client";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";

import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import { useState } from "react";
import {
  setCurrentStep,
  updateOnboardingFormData,
} from "@/redux/slices/onboardingSellerSlice";

const PersonnelInformationForm = () => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const existingFormData = useSelector(
    (store) => store.onboardingSeller.onboardingFormData
  );
  const currentStep = useSelector(
    (store) => store.onboardingSeller.currentStep
  );
  //get dispatcher
  const dispatch = useDispatch();

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });
  //submit form function
  const onSubmit = async (data) => {
    //update the checkout data
    dispatch(updateOnboardingFormData(data));
    //then update the current step
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-950 dark:text-gray-200 ">
        Personal Informations
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          placeHolder="Your First Name"
          className="w-full"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          placeHolder="Your Last Name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Seller's Physical Adress"
          name="physicalAddress"
          placeHolder="Your physical adress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          placeHolder="Your Phone Number"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      <NavButtons />
    </form>
  );
};

export default PersonnelInformationForm;
