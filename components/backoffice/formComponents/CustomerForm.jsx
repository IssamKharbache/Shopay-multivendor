"use client";
import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import ImageInput from "@/components/backoffice/inputformComponents/ImageInput";
import ConvertDateToIso from "@/lib/convertDateToIso";
import convertIsoToNormal from "@/lib/convertIsoToNormal";

const CustomerForm = ({ user }) => {
  const normalBirthDate = convertIsoToNormal(user.dateOfBirth);
  user.dateOfBirth = normalBirthDate;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [profileImage, setprofileImageUrl] = useState("");

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
      ...user,
    },
  });

  //REDIRECTION
  const router = useRouter();
  const redirectFunction = () => {
    router.push("/dashboard/customers");
  };

  const onSubmitForm = async (data) => {
    const dateConverted = ConvertDateToIso(data.dateOfBirth);
    data.profileImage = imageUrl;
    data.userId = user.id;
    data.dateOfBirth = dateConverted;

    makePutRequest(
      setLoading,
      `api/customers/${user.userId}`,
      data,
      "Customer Profile",
      reset,
      redirectFunction
    );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full max-w-3xl p-4 mx-auto bg-slate-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-6 "
      >
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500 ">
          Personal Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 pb-6 border-b border-gray-300 dark:border-gray-600  ">
          <TextInput
            label="Full Name"
            name="name"
            register={register}
            errors={errors}
            placeHolder="Customer Full Name"
            className="w-full"
          />
          <TextInput
            label="Username"
            name="username"
            register={register}
            errors={errors}
            placeHolder="Customer username"
            className="w-full"
          />
          <TextInput
            label="Birth Date"
            name="dateOfBirth"
            register={register}
            errors={errors}
            type="date"
            placeHolder="Customer birthday"
            className="w-full"
          />
          <TextInput
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            placeHolder="Customer First Name"
            className="w-full"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            placeHolder="Customer Last Name"
            className="w-full"
          />

          <TextInput
            label="Phone Number"
            name="phone"
            type="number"
            placeHolder="Customer Phone Number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeHolder="Customer Email"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Customer profile image"
            endpoint="customerProfileImage"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            getValue={getValue}
          />
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-4  text-blue-500 ">
          Shipping Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Country"
            name="country"
            placeHolder="Customer Country"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Street Adress"
            name="streetAddress"
            register={register}
            errors={errors}
            placeHolder="Customer Street Adress"
            className="w-full"
          />

          <TextInput
            label="City"
            name="city"
            placeHolder="Customer City"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="District"
            name="district"
            placeHolder="Customer District Area"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton
          buttonTitle="Update User"
          loadingButtonTitle="Updating Customer please wait..."
          isLoading={loading}
          uploadLoading={uploadLoading}
          loadingUploadTitle="Uploading customer Image please wait..."
        />
      </form>
    </div>
  );
};

export default CustomerForm;
