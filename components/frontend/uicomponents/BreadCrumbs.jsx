import React from "react";
//ICONS
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = () => {
  return (
    <nav className="flex py-4  justify-center">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-sm gap-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <IoHome />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <IoIosArrowForward className="rtl:rotate-180 w-5 h-5 text-gray-400 mx-1" />
            <a
              href="#"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Products
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <IoIosArrowForward className="rtl:rotate-180 w-5 h-5 text-gray-400 mx-1" />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Cart
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
