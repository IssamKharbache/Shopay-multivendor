"use client";
import FormHeader from "@/components/backoffice/formComponents/FormHeader";
//FORMS INPUTS
import ImageInput from "@/components/backoffice/formComponents/ImageInput";
import SubmitButton from "@/components/backoffice/formComponents/SubmitButton";
import TextareaInput from "@/components/backoffice/formComponents/TextAreaInput";
import TextInput from "@/components/backoffice/formComponents/TextInput";
//UPLOADTHING CSS FILE
import "@uploadthing/react/styles.css";
import { makePostRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/backoffice/formComponents/SelectInput";
//LIBS
import { generateSlug } from "@/lib/generateSlug";
//REACT HOOKS
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayItemsInput from "@/components/backoffice/formComponents/ArrayItemsInput";
import ToggleInput from "@/components/backoffice/formComponents/ToggleInput";

const NewProduct = () => {
  //CATEGORIES ARRAY
  const categories = [
    {
      id: 1,
      title: "Category 1",
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
  //FARMERS ARRAY
  const farmers = [
    {
      id: 1,
      title: "Farmer 1",
    },
    {
      id: 2,
      title: "Farmer 2",
    },
    {
      id: 3,
      title: "Farmer 3",
    },
  ];
  //tags
  const [tags, setTags] = useState([]);

  //FORM STATES
  const [imageUrl, setImageUrl] = useState("");
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
  //FORM SUBMIT FUNCTION
  const onSubmitForm = async (data) => {
    //generate the title slug
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    makePostRequest(setLoading, "api/products", data, "Products", reset);
    setImageUrl("");
  };
  return (
    <div className="font-poppins">
      <FormHeader headerTitle="New Category" />

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-5xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
            placeHolder="Product title"
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full font-poppins"
            placeHolder="Product title"
          />
          <TextInput
            label="Product Bar Code"
            name="barCode"
            register={register}
            errors={errors}
            className="w-full font-poppins"
            placeHolder="Product Bar code"
          />
          <SelectInput
            label="Select Product Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full font-poppins"
            options={categories}
          />
          <SelectInput
            label="Select Product Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full font-poppins"
            options={farmers}
          />
          <TextInput
            label="Product Price (Before Discount)"
            name="productPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full font-poppins"
            placeHolder="Product price"
          />
          <TextInput
            label="Product Price (After Discount)"
            name="salePrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full font-poppins"
            placeHolder="Product sale price"
          />
          <ImageInput
            label="Product Image"
            endpoint="productImageUploader"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
          />
          {/* TAGS */}
          <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag" />

          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
            placeHolder="Product description"
          />
          {/* CHECKBOX TOGGLE */}
          <ToggleInput
            label="Publish Your Product"
            nameWatched="isActive"
            isTrue={isActive}
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
        </div>
        <SubmitButton
          buttonTitle="Create Product"
          loadingButtonTitle="Creating new product please wait..."
          isLoading={loading}
        />
      </form>
    </div>
  );
};

export default NewProduct;
