"use client";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";
import { useRouter } from "next/navigation";

const NewBannerForm = ({ bannerData = {} }) => {
  const initialImageUrl = bannerData?.imageUrl ?? "";
  const id = bannerData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  //UPLOADING IMAGE STATES
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
      ...bannerData,
    },
  });
  const isActive = watch("isActive");
  //REDIRECTION
  const router = useRouter();
  const redirectFunction = () => {
    router.push("/dashboard/banners");
  };
  //submit function
  const onSubmitForm = async (data) => {
    data.imageUrl = imageUrl;
    if (id) {
      makePutRequest(
        setLoading,
        `api/banners/${id}`,
        data,
        "Banner",
        reset,
        redirectFunction
      );
    } else {
      makePostRequest(
        setLoading,
        "api/banners",
        data,
        "Banner",
        reset,
        redirectFunction
      );
      setImageUrl("");
    }
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

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-4xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="flex flex-col gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
            placeHolder="Banner title"
          />
          <TextInput
            label="Banner Link"
            name="link"
            type="url"
            register={register}
            errors={errors}
            placeHolder="Banner Link"
          />
          {/* CHECKBOX TOGGLE */}
          <ToggleInput
            label="Publish Your Banner"
            nameWatched="isActive"
            isTrue={isActive}
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
          {/* CONFIGURE ENDPOINT IN COREJS  */}
          <ImageInput
            label="Banner Image"
            endpoint="bannerImageUploader"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            getValue={getValue}
          />

          <SubmitButton
            buttonTitle={id ? "Update Banner" : "Create Banner"}
            loadingButtonTitle={`${
              id ? "Updating" : "Creating"
            }  new banner please wait...`}
            isLoading={loading}
            uploadLoading={uploadLoading}
            loadingUploadTitle="Uploading Banner Image please wait..."
          />
        </div>
      </form>
    </div>
  );
};

export default NewBannerForm;
