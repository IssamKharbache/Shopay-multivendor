"use client";
import React, { useState } from "react";
import "./styles/CustomDataTable.css";
import data from "../../../data.json";

const CustomDataTable = () => {
  //pagination
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentDisplayedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  return (
    <div className="bg-gray-300   dark:bg-slate-700 p-8 rounded-lg mt-4">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-300 ">
        Recent Orders
      </h2>
      {/* Table */}
      <div className="relative  overflow-x-auto  shadow-md sm:rounded-lg p-4">
        {/* TABLE HEADER */}
        <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <div className="checkbox-wrapper-13">
                    <input type="checkbox" id="c1-13" />
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                First name
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Last name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          {/* TABLE CONTENT */}
          <tbody>
            {currentDisplayedData.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <div className="checkbox-wrapper-13">
                        <input type="checkbox" id="c1-13" />
                      </div>

                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.first_name}
                  </th>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.last_name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.gender}</td>
                  <td className="flex px-6 py-4 items-center gap-2">
                    <button
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* PAGINATION */}
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500  dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto ">
            Showing{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              {itemStartIndex} - {itemEndIndex}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage == 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-blue-600 hover:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-600 dark:hover:text-white disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 dark:disabled:hover:bg-gray-800 dark:disabled:hover:text-gray-400"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    disabled={currentPage == index + 1}
                    className={` ${
                      currentPage == index + 1
                        ? "flex items-center justify-center px-3 h-8 leading-tight text-white   dark:hover:text-white bg-blue-600 border border-blue-300 hover:bg-blue-600  dark:bg-blue-800 dark:border-blue-700  dark:hover:bg-blue-700 "
                        : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-gray-300 dark:text-gray-400 bg-white hover:bg-blue-700  dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-blue-700 dark:hover:text-white border border-gray-300  "
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            })}

            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-blue-600 hover:text-gray-100 border border-gray-300 rounded-e-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white disabled:cursor-not-allowed disabled:hover:text-gray-700 
                disabled:hover:bg-white dark:disabled:hover:bg-gray-800 dark:disabled:hover:text-gray-400
                "
                disabled={currentPage == totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomDataTable;
