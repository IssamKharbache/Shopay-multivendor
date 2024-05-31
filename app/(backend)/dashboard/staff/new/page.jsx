"use client";
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePostRequest } from "@/lib/apiRequest";
import TextareaInput from "@/components/backoffice/inputformComponents/TextAreaInput";
import { generateUserCode } from "@/lib/generateUserCode";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";

const NewStaff = () => {
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
    const UniqueCode = generateUserCode("SPSM", data.fullname);
    data.code = UniqueCode;
    makePostRequest(setLoading, "api/staffs", data, "Staff", reset);
  };
  return (
    <div>
      <FormHeader headerTitle="New Staff" />

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
            placeHolder="Staff Name"
          />
          <TextInput
            label="Email address"
            name="email"
            register={register}
            errors={errors}
            placeHolder="Staff Email"
            className="w-full  font-poppins"
            type="email"
          />
          <TextInput
            label="NIN (ID Number)"
            name="nin"
            register={register}
            errors={errors}
            placeHolder="Staff NIN"
            className="w-full font-poppins"
          />
          <TextInput
            label="Date of Birth"
            name="dob"
            type="date"
            register={register}
            errors={errors}
            placeHolder="Staff Date of Birth"
            className="w-full font-poppins"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            placeHolder="Staff password"
            className="w-full font-poppins"
          />
          <TextInput
            label="Phone number"
            name="phone"
            register={register}
            errors={errors}
            placeHolder="Staff phone"
            className="w-full font-poppins"
            type="tel"
          />

          <TextInput
            label="Local Adress"
            name="adress"
            register={register}
            errors={errors}
            placeHolder="Staff adress"
            className="w-full font-poppins"
          />

          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            placeHolder="Staff Notes"
            isRequired={loading}
          />
          <ToggleInput
            label="Staff Status"
            nameWatched="isActive"
            register={register}
            trueTitle="Active"
            falseTitle="Inactive"
            isTrue={isActive}
          />
        </div>
        <SubmitButton
          buttonTitle="Create Staff member"
          loadingButtonTitle="Creating new staff please wait..."
          isLoading={loading}
        />
      </form>
    </div>
  );
};

export default NewStaff;
