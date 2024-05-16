"use client";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { FaRegCircle } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import { PiHandshakeThin } from "react-icons/pi";
import { FaCcMastercard } from "react-icons/fa6";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentMethodForm = () => {
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );
  const currentStep = useSelector((store) => store.checkout.currentStep);
  //get dispatcher
  const dispatch = useDispatch();
  const initialPaymentMethod = existingFormData.paymentMethod || "";
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
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
    data.paymentMethod = paymentMethod;
    //update the checkout data
    dispatch(updateCheckoutFormData(data));
    //then update the current step
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-950 dark:text-gray-200">
        Payment Details
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="col-span-full">
          <h3 className="mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-white">
            Which Payment Method do you Prefer ?
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                className="hidden peer group"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="cod"
                className="inline-flex   items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Design */}
                <div className="flex gap-6 items-center">
                  <PiHandshakeThin
                    htmlFor="cod"
                    className="w-10 h-10 ms-3 flex-shrink-0"
                  />
                  <div>
                    <h1 className="text-xl font-semibold">Cash On Delivery</h1>
                  </div>
                </div>
                {/* icon down here */}
                <FaRegCircle className="w-5 h-5 ms-3 flex-shrink-0 peer-checked:bg-blue-500" />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="card"
                name="payment"
                value="Credit Card"
                className="hidden peer"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor="card"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Design */}
                <div className="flex gap-6 items-center">
                  <FaCcMastercard className="w-11  h-11 ms-3 flex-shrink-0 " />
                  <div className="">
                    <h1 className="text-xl font-semibold">Credit Card</h1>
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

export default PaymentMethodForm;
