"use client";
//FORM INPUTS
import FormHeader from "@/components/backoffice/inputformComponents/FormHeader";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextareaInput from "@/components/backoffice/inputformComponents/TextAreaInput";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import SelectInput from "@/components/backoffice/inputformComponents/SelectInput";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";

//TOOLS
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
//REACT HOOKS
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const QuillEditor = dynamic(
  () => import("@/components/backoffice/inputformComponents/QuillEditor"),
  {
    ssr: false,
  }
);

const NewBlogForm = ({ categories, updateData = {} }) => {
  const initialContent = updateData?.content ?? "";
  const initialImageUrl = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";
  const [content, setContent] = useState(initialContent);
  //FORM STATES

  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  //UPLOADING IMAGE STATES
  const [uploadLoading, setUploadLoading] = useState(false);
  let isUploading = false;
  //get isUploading value from imageinput component

  const getValue = (value) => {
    isUploading = value;
    if (isUploading) {
      setUploadLoading(true);
    } else {
      setUploadLoading(false);
    }
  };

  //REDIRECTING
  const router = useRouter();
  const redirectFunction = () => {
    router.push("/dashboard/community");
  };
  const isActive = watch("isActive");

  const onSubmitForm = async (data) => {
    //generate the title slug
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    if (id) {
      //post
      makePutRequest(
        setLoading,
        `api/blogs/${id}`,
        data,
        "Blog",
        reset,
        redirectFunction
      );
    } else {
      makePostRequest(
        setLoading,
        "api/blogs",
        data,
        "Blog",
        reset,
        redirectFunction
      );
      setImageUrl("");
      setContent("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-full max-w-2xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="flex flex-col gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Blog title"
          name="title"
          register={register}
          errors={errors}
          className="w-full font-poppins"
          placeHolder="Blog title"
        />
        <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          errors={errors}
          className="w-full font-poppins"
          options={categories}
        />
        <TextareaInput
          label="Blog Description"
          name="description"
          register={register}
          errors={errors}
          placeHolder="Blog description"
        />
        <ImageInput
          label="Blog Thumbnail"
          endpoint="blogImageUploader"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          getValue={getValue}
        />
        {/* CONTENT */}

        <QuillEditor
          label="Blog Content"
          value={content}
          onChange={setContent}
        />
        {/* CHECKBOX TOGGLE */}
        <ToggleInput
          label="Publish your blog"
          nameWatched="isActive"
          isTrue={isActive}
          trueTitle="Active"
          falseTitle="Inactive"
          register={register}
        />
        <SubmitButton
          buttonTitle={id ? "Update Blog" : "Create Blog"}
          loadingButtonTitle={`${
            id ? "Updating" : "Creating"
          }  new blog please wait...`}
          isLoading={loading}
          uploadLoading={uploadLoading}
          loadingUploadTitle="Uploading Blog Image please wait..."
        />
      </div>
    </form>
  );
};

export default NewBlogForm;
