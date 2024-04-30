import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  multiple = false,
  className = "sm:col-span-2 font-poppins",
  options = [],
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 mb-2"
      >
        {label} {multiple ? `(hold CTRL to select multiple)` : ""}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          name={name}
          multiple={multiple}
          className="block w-full rounded-sm border-0 py-3 text-gray-900 dark:text-gray-300 dark:bg-slate-800 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option
                className=" text-gray-700  flex   dark:text-gray-200 p-3 cursor-pointer"
                key={i}
                value={option.id}
              >
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
