"use client";

//FORMS INPUTS
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextareaInput from "@/components/backoffice/inputformComponents/TextAreaInput";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
//UPLOADTHING CSS FILE
import "@uploadthing/react/styles.css";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/backoffice/inputformComponents/SelectInput";
//LIBS
import { generateSlug } from "@/lib/generateSlug";
//REACT HOOKS
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayItemsInput from "@/components/backoffice/inputformComponents/ArrayItemsInput";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import FormHeader from "../inputformComponents/FormHeader";

const NewProductForm = ({ categories, farmers, updateData = {} }) => {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  //tags
  const [tags, setTags] = useState(initialTags);
  //FORM STATES
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  //REDIRECTING
  const router = useRouter();
  const redirectFunction = () => {
    router.push("/dashboard/products");
  };

  //EXTRACTING REACT HOOK FORM FUNCTIONS NEEDED
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholeSale: false,
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

  //watch states for changes
  const isActive = watch("isActive");
  const isWholeSale = watch("isWholeSale");
  //FORM SUBMIT FUNCTION
  const onSubmitForm = async (data) => {
    //generate the title slug
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("SPP", data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    data.productCode = productCode;
    data.qty = 1;
    if (id) {
      makePutRequest(
        setLoading,
        `api/products/${id}`,
        data,
        "Product",
        reset,
        redirectFunction
      );
    } else {
      makePostRequest(
        setLoading,
        "api/products",
        data,
        "Products",
        reset,
        redirectFunction
      );
      setImageUrl("");
      setTags([]);
    }
  };
  return (
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
          placeHolder="Product SKU"
        />
        <TextInput
          label="Product Bar Code"
          name="barcode"
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
        <TextInput
          label="Product Stock"
          name="productStock"
          register={register}
          errors={errors}
          className="w-full font-poppins"
          placeHolder="Product Stock"
        />

        <TextInput
          label="Unit of Mass (eg KG)"
          name="unit"
          register={register}
          errors={errors}
          type="text"
          placeHolder="Unit of mass"
          className="w-full"
        />
        {/* CHECKBOX TOGGLE */}
        <ToggleInput
          label="Is your product supports Wholesale Selling ?"
          nameWatched="isWholeSale"
          isTrue={isWholeSale}
          trueTitle="Supported"
          falseTitle="None Supported"
          register={register}
        />

        {isWholeSale && (
          <>
            <TextInput
              label="Whole sale price"
              name="wholeSalePrice"
              register={register}
              errors={errors}
              type="number"
              className="w-full font-poppins"
              placeHolder="Whole sale price"
            />
            <TextInput
              label="Minimum Wholesale Qty"
              name="wholesaleQty"
              register={register}
              errors={errors}
              type="number"
              className="w-full font-poppins"
              placeHolder="Minimum Wholesale Qt"
            />
          </>
        )}
        <ImageInput
          label="Product Image"
          endpoint="productImageUploader"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          getValue={getValue}
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
        buttonTitle={id ? "Update Product" : "Create Product"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        }  new product please wait...`}
        isLoading={loading}
        uploadLoading={uploadLoading}
        loadingUploadTitle="Uploading Product Image please wait..."
      />
    </form>
  );
};

export default NewProductForm;
