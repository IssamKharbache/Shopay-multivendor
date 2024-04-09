"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ArrayItemsInput = ({ setItems, items = [], itemTitle }) => {
  //items STATES

  const [showTagForm, setShowTagForm] = useState(false);
  const [item, setItem] = useState("");
  //adding items
  const addItem = () => {
    if (!item) return;

    setItems([...items, item]);
    setItem("");
  };
  //remove items
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div className="sm:col-span-2">
      {/* ADD TAG BUTTON */}
      {showTagForm ? (
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              {/* LEFT ICON */}
            </div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="voice-search"
              className="block w-full rounded-sm border-0 py-2 text-gray-900 dark:text-gray-300 dark:bg-transparent shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6 "
              placeholder={`Create a ${itemTitle}`}
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              {/* RIGHT ICON */}
            </button>
          </div>
          <button
            onClick={addItem}
            type="button"
            className="inline-flex gap-3 items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-500 rounded-lg border  hover:bg-blue-800 focus:ring-blue-300 dark:bg-slate-600  dark:hover:bg-slate-700 duration-200"
          >
            Add <FaPlus className="w-4 h-4 me-2" />
          </button>

          <button
            onClick={() => setShowTagForm(false)}
            type="button"
            className="ml-8 shrink-0 flex items-center justify-center bg-red-400 hover:bg-red-500 duration-200 rounded-full px-2 py-2"
          >
            <IoCloseOutline size={20} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowTagForm(!showTagForm)}
          type="button"
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-poppins py-2 px-4 "
        >
          <FaPlus /> <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap gap-4 mt-4">
        {items.map((item, i) => {
          return (
            <div
              onClick={() => removeItem(i)}
              key={i}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-gray-100 dark:text-gray-200 dark:bg-slate-600 rounded-md cursor-pointer"
            >
              <p>{item}</p>

              <IoCloseOutline size={20} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrayItemsInput;
