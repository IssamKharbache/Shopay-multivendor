"use client";

import SubmitButton from "@/components/backoffice/inputformComponents/SubmitButton";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@uploadthing/react/styles.css";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import ToggleInput from "@/components/backoffice/inputformComponents/ToggleInput";
import ConvertDateToIso from "@/lib/convertDateToIso";
import { useRouter } from "next/navigation";
import convertIsoToNormal from "@/lib/convertIsoToNormal";
import { useSession } from "next-auth/react";
const CouponForm = ({ couponData = {} }) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...couponData,
    },
  });
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  const vendorId = session?.user?.id;

  const expirydateNormal = convertIsoToNormal(couponData.expiryDate);
  couponData.expiryDate = expirydateNormal;
  const id = couponData?.id ?? "";

  const isActive = watch("isActive");
  //REDIRECTING FUNCTION

  const redirectFunction = () => {
    router.push("/dashboard/coupons");
  };
  //SUBMIT FUNCTION
  const onSubmitForm = async (data) => {
    //generate the coupon code
    data.couponCode = generateCouponCode(data.title, data.expiryDate);
    data.vendorId = vendorId;
    const isoFormatedDate = ConvertDateToIso(data.expiryDate);
    data.expiryDate = isoFormatedDate;
    if (id) {
      makePutRequest(
        setLoading,
        `api/coupons/${id}`,
        data,
        "Coupon",
        reset,
        redirectFunction
      );
    } else {
      makePostRequest(
        setLoading,
        "api/coupons",
        data,
        "Coupon",
        reset,
        redirectFunction
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-full max-w-2xl p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Coupon Title"
          name="title"
          register={register}
          errors={errors}
          placeHolder="Coupon Title"
        />
        <TextInput
          label="Coupon Expired Date"
          name="expiryDate"
          type="date"
          register={register}
          errors={errors}
        />
        {/* CHECKBOX TOGGLE */}
        <ToggleInput
          label="Active Your Coupon"
          nameWatched="isActive"
          isTrue={isActive}
          trueTitle="Active"
          falseTitle="Inactive"
          register={register}
        />
      </div>
      <SubmitButton
        buttonTitle={id ? "Update Coupon" : "Create Coupon"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        }  new coupon please wait...`}
        isLoading={loading}
      />
    </form>
  );
};

export default CouponForm;
