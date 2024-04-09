"use client";
import FormHeader from "@/components/backoffice/formComponents/FormHeader";
import SubmitButton from "@/components/backoffice/formComponents/SubmitButton";
import TextInput from "@/components/backoffice/formComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePostRequest } from "@/lib/apiRequest";
import TextareaInput from "@/components/backoffice/formComponents/TextAreaInput";
import { generateUserCode } from "@/lib/generateUserCode";
import ToggleInput from "@/components/backoffice/formComponents/ToggleInput";

const NewFarmer = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");

  const onSubmitForm = async (data) => {
    //generate the farmer unique code code
    const farmerUniqueCode = generateUserCode("SP", data.fullname);
    data.farmerCode = farmerUniqueCode;
    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset);
  };
  return (
    <div>
      <FormHeader headerTitle="New Farmer" />

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-6xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Full name"
            name="fullname"
            register={register}
            errors={errors}
            placeHolder="Farmer Name"
            className="w-full font-poppins"
          />
          <TextInput
            label="Phone number"
            name="phone"
            register={register}
            errors={errors}
            placeHolder="Farmer phone"
            className="w-full font-poppins"
            type="tel"
          />
          <TextInput
            label="Email address"
            name="email"
            register={register}
            errors={errors}
            placeHolder="Farmer Email"
            className="w-full  font-poppins"
            type="email"
          />
          <TextInput
            label="Local Adress"
            name="adress"
            register={register}
            errors={errors}
            placeHolder="Farmer adress"
            className="w-full font-poppins"
          />
          <TextInput
            label="Contact person full name"
            name="contactperson"
            register={register}
            errors={errors}
            placeHolder="Contact person name"
            className="w-full font-poppins"
          />
          <TextInput
            label="Contact person phone"
            name="contactphone"
            register={register}
            errors={errors}
            placeHolder="Farmer contact person phone"
            className="w-full font-poppins"
            type="tel"
          />

          <TextareaInput
            label="Payments terms"
            name="terms"
            register={register}
            errors={errors}
            placeHolder="Farmer Payments terms"
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            placeHolder="Farmer Notes"
            isRequired={loading}
          />
          {/* CHECKBOX TOGGLE */}
          <ToggleInput
            label="Farmer Status"
            nameWatched="isActive"
            isTrue={isActive}
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
        </div>
        <SubmitButton
          buttonTitle="Create Farmer"
          loadingButtonTitle="Creating new farmer please wait..."
          isLoading={loading}
        />
      </form>
    </div>
  );
};

export default NewFarmer;
