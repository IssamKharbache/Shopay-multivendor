"use client";
//FORM INPUTS
import FormHeader from "@/components/backoffice/formComponents/FormHeader";
import ImageInput from "@/components/backoffice/formComponents/ImageInput";
import SubmitButton from "@/components/backoffice/formComponents/SubmitButton";
import TextareaInput from "@/components/backoffice/formComponents/TextAreaInput";
import TextInput from "@/components/backoffice/formComponents/TextInput";
import SelectInput from "@/components/backoffice/formComponents/SelectInput";
import ToggleInput from "@/components/backoffice/formComponents/ToggleInput";

//TOOLS
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";
//REACT HOOKS
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import QuillEditor from "@/components/backoffice/formComponents/QuillEditor";

const NewBlog = () => {
  const categories = [
    {
      id: 1,
      title: "Category 1 ",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ];
  const [content, setContent] = useState("");
  //FORM STATES

  const [imageUrl, setImageUrl] = useState("");
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
    },
  });
  const isActive = watch("isActive");

  const onSubmitForm = async (data) => {
    //generate the title slug
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    makePostRequest(setLoading, "api/blogs", data, "Blogs", reset);
    setImageUrl("");
    setContent("");
  };
  return (
    <div>
      <FormHeader headerTitle="New Blog" />

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-2xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
            name="categoryIds"
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
            buttonTitle="Create Blog"
            loadingButtonTitle="Creating new blog please wait..."
            isLoading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
