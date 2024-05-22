"use client";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";

import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";
import { useSession } from "next-auth/react";

const PersonnelDetailsForm = () => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );
  const currentStep = useSelector((store) => store.checkout.currentStep);
  //get dispatcher
  const dispatch = useDispatch();
  //submit form function

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });

  const onSubmit = async (data) => {
    if (userId) {
      data.userId = userId;
      //update the checkout data
      dispatch(updateCheckoutFormData(data));
      //then update the current step
      dispatch(setCurrentStep(currentStep + 1));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-950 dark:text-gray-200 ">
        Personal Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          placeHolder="Your First Name"
          className="w-full"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          placeHolder="Your Last Name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeHolder="Your Email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          placeHolder="Your Phone Number"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      <NavButtons />
    </form>
  );
};

export default PersonnelDetailsForm;
