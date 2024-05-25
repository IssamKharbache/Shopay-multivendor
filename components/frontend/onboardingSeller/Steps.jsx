"use client";
import { ChevronRight } from "lucide-react";

import { useSelector } from "react-redux";

const Steps = ({ steps }) => {
  const currentStep = useSelector(
    (store) => store.onboardingSeller.currentStep
  );

  return (
    <div>
      <nav className="flex ">
        <ol
          role="list"
          className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5"
        >
          <li>
            <div className="-m-1">
              <h1 className="inline-flex text-gray-500 text-sm md:text-[16px]">
                Account
              </h1>
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
