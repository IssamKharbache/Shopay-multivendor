export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2 font-poppins",
  defaultValue = "",
  placeHolder = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-sm border-0 py-3 text-gray-900 dark:text-gray-300 dark:bg-transparent shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
          placeholder={`Type the ${placeHolder.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm   text-red-600 rounded-lg">
            {label} is required
          </span>
        )}
      </div>
    </div>
  );
}
