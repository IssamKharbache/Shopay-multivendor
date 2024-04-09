import React from "react";

const ToggleInput = ({
  register,
  label,
  isTrue,
  nameWatched,
  trueTitle,
  falseTitle,
  className = "sm:col-span-2 sm:flex font-poppins",
}) => {
  return (
    <div className={`${className}`}>
      <div className="w-full">
        <h2 className="block mb-4 text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 ">
          {label}
        </h2>
      </div>
      <div className="w-full ">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            {...register(`${nameWatched}`)}
            type="checkbox"
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-gray-400   rounded-full peer dark:bg-gray-600    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isTrue ? `${trueTitle}` : `${falseTitle}`}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ToggleInput;
