import { Search } from "lucide-react";
import React from "react";

const SearchForm = ({ placeHolder }) => {
  return (
    <form className="flex items-center mx-auto font-poppins">
      <label className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search size={15} />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium bg-blue-400 rounded-full hover:bg-blue-500 dark:hover:bg-blue-700 dark:bg-blue-600 duration-200"
      >
        <Search size={18} />

        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
