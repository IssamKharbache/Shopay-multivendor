"use client";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";

import { useDispatch, useSelector } from "react-redux";
import TextareaInput from "@/components/backoffice/inputformComponents/TextAreaInput";
import {
  setCurrentStep,
  updateOnboardingFormData,
} from "@/redux/slices/onboardingSellerSlice";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import { useState } from "react";

const AdditionalInformationForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const existingFormData = useSelector(
    (store) => store.onboardingSeller.onboardingFormData
  );
  const currentStep = useSelector(
    (store) => store.onboardingSeller.currentStep
  );
  //get dispatcher
  const dispatch = useDispatch();

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

  const onSubmit = async (data) => {
    data.imageUrl = imageUrl;
    //update the checkout data
    dispatch(updateOnboardingFormData(data));
    //then update the current step
    dispatch(setCurrentStep(currentStep + 1));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-950 dark:text-gray-200">
        Additional Informations
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextareaInput
          label="Payments terms"
          name="terms"
          register={register}
          errors={errors}
          placeHolder="Your  Payments terms"
          isRequired={false}
        />
        <TextareaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          placeHolder="Your Notes"
          isRequired={false}
        />

        <ImageInput
          label="Seller image"
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
          endpoint="sellerImageUploader"
        />
      </div>

      <NavButtons />
    </form>
  );
};

export default AdditionalInformationForm;
