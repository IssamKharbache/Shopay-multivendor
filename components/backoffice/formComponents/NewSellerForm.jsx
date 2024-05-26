"use client";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePostRequest } from "@/lib/apiRequest";
import TextareaInput from "@/components/backoffice/inputformComponents/TextAreaInput";
import { generateUserCode } from "@/lib/generateUserCode";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";
import { useRouter } from "next/navigation";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import ArrayItemsInput from "../inputformComponents/ArrayItemsInput";

const NewFarmerForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [profileImageUrl, setprofileImageUrl] = useState("");

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

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
    },
  });
  const isActive = watch("isActive");
  //REDIRECTION

  const router = useRouter();
  const redirectFunction = () => {
    router.push("/login");
  };

  const onSubmitForm = async (data) => {
    //generate the farmer unique code code
    const farmerUniqueCode = generateUserCode("SP", data.name);
    data.farmerCode = farmerUniqueCode;
    data.products = products;
    data.profileImageUrl = imageUrl;
    data.userId = user.id;

    makePostRequest(
      setLoading,
      "api/farmers",
      data,
      "Farmer Profile",
      reset,
      redirectFunction
    );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-6xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Full name"
            name="name"
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
            name="contactPerson"
            register={register}
            errors={errors}
            placeHolder="Contact person name"
            className="w-full font-poppins"
          />
          <TextInput
            label="Contact person phone"
            name="contactPhone"
            register={register}
            errors={errors}
            placeHolder="Farmer contact person phone"
            className="w-full font-poppins"
            type="tel"
          />
          {/* ACCARE */}
          <TextInput
            label="What is the Size of Your Land in Hectare"
            name="landSize"
            register={register}
            errors={errors}
            placeHolder="Farmer contact person phone"
            className="w-full font-poppins"
            type="number"
          />
          <TextInput
            label="What is your main Products That You Cultivate"
            name="mainCrop"
            register={register}
            errors={errors}
            className="w-full font-poppins"
            placeHolder="Farmer Main Products"
            type="text"
          />
          <ArrayItemsInput
            itemTitle="Product"
            setItems={setProducts}
            items={products}
          />

          <TextareaInput
            label="Payments terms"
            name="terms"
            register={register}
            errors={errors}
            placeHolder="Farmer Payments terms"
            isRequired={false}
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

          <ImageInput
            label="Farmer profile image"
            endpoint="sellerImageUploader"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            getValue={getValue}
          />
        </div>
        <SubmitButton
          buttonTitle="Create Farmer"
          loadingButtonTitle="Creating new farmer please wait..."
          isLoading={loading}
          uploadLoading={uploadLoading}
          loadingUploadTitle="Uploading Farmer Image please wait..."
        />
      </form>
    </div>
  );
};

export default NewFarmerForm;
