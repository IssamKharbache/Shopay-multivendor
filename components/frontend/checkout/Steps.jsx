"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { useSelector } from "react-redux";

const Steps = ({ steps }) => {
  const cartItems = useSelector((store) => store.cart);
  const currentStep = useSelector((store) => store.checkout.currentStep);
  return (
    <div>
      <nav className="flex ">
        <ol
          role="list"
          className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5"
        >
          <li>
            <div className="-m-1">
              <Link
                href="/cart"
                className="inline-flex items-center p-2 text-sm md:text-base font-medium bg-blue-400 hover:bg-blue-500  text-gray-900 rounded-md  duration-150"
              >
                Cart
                <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-bold bg-red-500 rounded-full text-gray-50">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </li>

          {steps.map((step, i) => {
            return (
              <li key={i}>
                <div className="flex items-center ">
                  <ChevronRight className="flex-shrink-0 w-4 h-4 text-gray-400" />
                  <div className="-m-1">
                    <p
                      className={`p-1 ml-1.5 duration-300   ${
                        step.number === currentStep
                          ? " text-blue-700 font-bold text-md md:text-[19px]"
                          : "text-gray-500 text-sm md:text-[16px]"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Steps;
