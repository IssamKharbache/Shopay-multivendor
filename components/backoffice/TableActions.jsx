import React from "react";
import { CiExport } from "react-icons/ci";
import { IoSearchOutline, IoTrashOutline } from "react-icons/io5";
import OutlineButton from "../OutlineButton";

const TableActions = () => {
  return (
    <div className="flex justify-between  items-center gap-8 py-6 px-12 bg-slate-200 dark:bg-slate-700  rounded-lg">
      <div className="flex-grow">
        <div className="group relative">
          <input
            type="text"
            className="h-12 w-full md:w-3/4 font-poppins  rounded-sm px-10 shadow-sm text-md transition-all bg-slate-500 text-white 
           focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-300 dark:placeholder:text-gray-300 placeholder:text-sm sm:placeholder:text-base"
            placeholder="Search for items..."
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-500">
            <IoSearchOutline className="w-4 h-4 text-gray-100" />
          </div>
        </div>{" "}
      </div>
      <div className="flex gap-4">
        {/* EXPORT */}
        <OutlineButton icon={CiExport} text="Export" />
        <div className="flex gap-4">
          {/* DELETE */}
          <button className="flex items-center gap-2 bg-red-500 hover:scale-105 hover:bg-red-700 font-poppins duration-200  rounded-lg px-4 py-[8px]">
            <IoTrashOutline size={23} />
            <span className="sm:hidden lg:block hidden">Bulk delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableActions;
