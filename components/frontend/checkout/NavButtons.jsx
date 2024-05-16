"use client";
import { setCurrentStep } from "@/redux/slices/checkoutSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const NavButtons = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  return (
    <div className="flex justify-between items-center gap-4">
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
        className="flex items-center  gap-4 justify-center font-semibold text-xl w-full  rounded-md p-4 mt-6 bg-slate-300 hover:bg-slate-400   dark:bg-gray-700 dark:hover:bg-gray-950 duration-200"
        type="submit"
      >
        <span>Next Step</span>
        <ChevronRight className="w-5 h-5 ml-2 " />
      </button>
    </div>
  );
};

export default NavButtons;
