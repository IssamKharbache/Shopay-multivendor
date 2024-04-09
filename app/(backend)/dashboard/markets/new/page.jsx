"use client";
import FormHeader from "@/components/backoffice/formComponents/FormHeader";
import ImageInput from "@/components/backoffice/formComponents/ImageInput";
import SubmitButton from "@/components/backoffice/formComponents/SubmitButton";
import TextareaInput from "@/components/backoffice/formComponents/TextAreaInput";
import TextInput from "@/components/backoffice/formComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import ToggleInput from "@/components/backoffice/formComponents/ToggleInput";

const NewBanner = () => {
  const [logoUrl, setlogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");

  const onSubmitForm = async (data) => {
    //generate the title slug
    const slug = generateSlug(data.name);
    data.slug = slug;
    data.logoUrl = logoUrl;
    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setlogoUrl("");
  };
  return (
    <div>
      <FormHeader headerTitle="New Market" />
      {/* ID = autogenerated | TITLE | SLUG = autogenerated | LOGO(IMG) | DESCRIPTION */}
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-4xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Name"
            name="name"
            register={register}
            errors={errors}
            placeHolder="Market Name"
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
            placeHolder="Market description"
          />
          {/* CHECKBOX TOGGLE */}
          <ToggleInput
            label="Market Status"
            nameWatched="isActive"
            isTrue={isActive}
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
          {/* CONFIGURE ENDPOINT IN COREJS  */}
          <ImageInput
            label="Market logo"
            endpoint="marketLogoUploader"
            imageUrl={logoUrl}
            setImageUrl={setlogoUrl}
          />

          <SubmitButton
            buttonTitle="Create Market"
            loadingButtonTitle="Creating new market please wait..."
            isLoading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default NewBanner;
