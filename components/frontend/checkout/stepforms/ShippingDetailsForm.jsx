"use client";
import TextInput from "@/components/backoffice/inputformComponents/TextInput";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { FaUps } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaDhl } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";

const ShippingDetailsForm = () => {
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );
  const currentStep = useSelector((store) => store.checkout.currentStep);
  //get dispatcher
  const dispatch = useDispatch();
  //submit form function
  const initialShippingCost = existingFormData.shippingCost || "";
  const [shippingCost, setShippingCost] = useState(initialShippingCost);
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
    data.shippingCost = shippingCost;
    //update the checkout data
    dispatch(updateCheckoutFormData(data));
    //then update the current step
    dispatch(setCurrentStep(currentStep + 1));

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mt-6 mb-4  text-gray-950 dark:text-gray-200">
        Shipping Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Country"
          name="country"
          placeHolder="Your Country"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Street Adress"
          name="streetAddress"
          register={register}
          errors={errors}
          placeHolder="Your Street Adress"
          className="w-full"
        />

        <TextInput
          label="City"
          name="city"
          placeHolder="Your City"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          label="District"
          name="district"
          placeHolder="Your District Area"
          register={register}
          errors={errors}
          className="w-full"
        />

        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
            Our Shipping options
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <input
                type="radio"
                id="cheap-cost"
                name="shipping"
                value="25"
                className="hidden peer"
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                htmlFor="cheap-cost"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Design */}
                <div className="flex gap-6 items-center">
                  <FaUps className="w-8 h-8 text-amber-950 dark:text-amber-700 ms-3 flex-shrink-0" />
                  <div>
                    <h1 className="text-xl font-semibold">UPS</h1>
                    <div>
                      Delivery Cost : <strong>25$</strong>
                      <h2>Shipping between 5 and 10 days</h2>
                    </div>
                  </div>
                </div>
                {/* icon down here */}
                <FaRegCircle className="w-5 h-5 ms-3 flex-shrink-0 " />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="expensive"
                name="shipping"
                value="56"
                className="hidden peer"
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                htmlFor="expensive"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Design */}
                <div className="flex gap-6 items-center">
                  <FaDhl className="w-11 text-yellow-400 h-11 ms-3 flex-shrink-0 " />
                  <div className="">
                    <h1 className="text-xl font-semibold">DHL</h1>
                    <div>
                      Delivery Cost : <strong>56$</strong>
                      <h2>Shipping between 2 and 4 days</h2>
                    </div>
                  </div>
                </div>
                {/* icon down here */}
                <FaRegCircle className="w-5 h-5 ms-3 flex-shrink-0 dark:peer-checked:bg-blue-600" />
              </label>
            </li>
          </ul>
        </div>
      </div>

      <NavButtons />
    </form>
  );
};

export default ShippingDetailsForm;
