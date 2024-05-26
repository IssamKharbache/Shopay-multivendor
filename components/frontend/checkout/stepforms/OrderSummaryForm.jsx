"use client";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const OrderSummaryForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //checkout slice
  const dispatch = useDispatch();

  const currentStep = useSelector((store) => store.checkout.currentStep);
  const checkoutFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );

  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };
  //submitting data
  const submitData = async () => {
    //get both the order items and the form information
    const data = {
      orderItems: cartItems,
      checkoutFormData,
    };

    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Order Created Successfully");
        router.push(`/order-confirmation/${responseData.id}`);
      } else {
        setLoading(false);
        toast.error("Something went wrong please try again");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  //cart slice
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;
  //delete item from order
  const handleCartItemDelete = (cartId) => {
    //dispatch delete slice
    dispatch(removeFromCart(cartId));
    toast.success("Item removed from cart", {
      position: "top-center",
    });
  };
  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-950 dark:text-gray-200">
        Order Summary
      </h2>
      {cartItems.map((cartItem, i) => (
        <div
          key={i}
          className="grid grid-cols-10 md:flex-row gap-6 justify-between pt-4 border-b border-gray-300 dark:border-gray-800 pb-6"
        >
          {/* product info */}
          <div className="flex flex-col md:flex-row justify-center col-span-4 md:col-span-5 gap-6 items-center">
            <Image
              src={cartItem.imageUrl}
              alt={cartItem.title}
              width={250}
              height={250}
              className="w-16 h-16 object-cover rounded-xl"
            />

            <p className="text-lg font-semibold text-center md:text-start w-56 line-clamp-1">
              {cartItem.title}
            </p>
          </div>
          {/* QTY ADJUSTMENT */}
          <div className="pt-2 col-span-3 md:col-span-3">
            <div className="flex items-center justify-center">
              <div className="flex gap-4 rounded border border-gray-300 dark:border-slate-700 items-center">
                <p className="flex-grow  px-8 py-2 font-semibold">
                  x{cartItem.qty}
                </p>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="md:flex hidden  md:justify-end col-span-5 md:col-span-2 items-center gap-4">
            <p className="text-3xl md:text-2xl   font-semibold">
              {cartItem.salePrice}$
            </p>
            <button onClick={() => handleCartItemDelete(cartItem.id)}>
              <IoTrashOutline className="text-red-500 text-lg hover:scale-110 duration-200" />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between gap-8 mt-6">
        <p className="text-2xl font-semibold">Subtotal</p>
        <p className="text-2xl font-semibold">{subTotal}$</p>
      </div>
      {loading ? (
        <button
          disabled
          className="flex items-center gap-8   justify-center font-semibold text-base w-full  rounded-md p-4 opacity-70 mt-6 bg-slate-400  cursor-not-allowed   dark:bg-gray-700  duration-200"
        >
          Processing... Please wait
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </button>
      ) : (
        <div className="mt-8 flex gap-8">
          {currentStep > 1 && (
            <button
              onClick={handlePreviousStep}
              className="flex items-center  gap-4 justify-center font-semibold text-xl w-full  rounded-md p-4 mt-6 bg-slate-300 hover:bg-slate-400   dark:bg-gray-700 dark:hover:bg-gray-950 duration-200"
              type="button"
            >
              <ChevronLeft className=" w-5 h-5 mr-2 duration-300" />
              <span>Previous Step</span>
            </button>
          )}

          <button
            onClick={submitData}
            className="flex items-center  gap-4 justify-center font-semibold text-xl w-full  rounded-md p-4 mt-6 bg-slate-300 hover:bg-slate-400   dark:bg-gray-700 dark:hover:bg-gray-950 duration-200"
          >
            Procced to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummaryForm;
