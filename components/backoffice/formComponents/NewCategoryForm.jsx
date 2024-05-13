"use client";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextareaInput from "@/components/backoffice/inputformComponents/TextAreaInput";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";

import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";
import { useRouter } from "next/navigation";

const NewCategoryForm = ({ categoryEditData = {} }) => {
  const initialImageUrl = categoryEditData?.imageUrl ?? "";
  const id = categoryEditData?.id ?? "";

  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  let isUploading = false;

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...categoryEditData,
    },
  });
  const isActive = watch("isActive");

  //REDIRECTION
  const router = useRouter();
  const redirectFunction = () => {
    router.push("/dashboard/categories");
  };
  //get isUploading value from imageinput component

  const getValue = (value) => {
    isUploading = value;
    if (isUploading) {
      setUploadLoading(true);
    } else {
      setUploadLoading(false);
    }
  };

  const onSubmitForm = async (data) => {
    //generate the title slug
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    if (id) {
      makePutRequest(
        setLoading,
        `api/categories/${id}`,
        data,
        "Category",
        reset,
        redirectFunction
      );
    } else {
      //Create
      makePostRequest(
        setLoading,
        "api/categories",
        data,
        "Category",
        reset,
        redirectFunction
      );
      setImageUrl("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-full max-w-2xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="flex flex-col gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Category Title"
          name="title"
          register={register}
          errors={errors}
          placeHolder="the Category title"
        />

        <TextareaInput
          label="Category Description"
          name="description"
          register={register}
          errors={errors}
          placeHolder="Category description"
        />
        {/* CHECKBOX TOGGLE */}
        <ToggleInput
          label="Publish Your Category"
          nameWatched="isActive"
          isTrue={isActive}
          trueTitle="Active"
          falseTitle="Inactive"
          register={register}
        />
        <ImageInput
          label="Category Image"
          endpoint="categoryImageUploader"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          getValue={getValue}
        />

        <SubmitButton
          buttonTitle={id ? "Update Categorie" : "Create Category"}
          loadingButtonTitle={`${
            id ? "Updating" : "Creating"
          }  new category please wait...`}
          isLoading={loading}
          uploadLoading={uploadLoading}
          loadingUploadTitle="Uploading Category image please wait..."
        />
      </div>
    </form>
  );
};

export default NewCategoryForm;
