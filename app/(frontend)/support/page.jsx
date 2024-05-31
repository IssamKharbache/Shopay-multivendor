import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { RiBankCardFill, RiQrScan2Line } from "react-icons/ri";
import { TbForbid2 } from "react-icons/tb";
import { PiArrowsClockwiseBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const cards = [
  {
    title: "Place an Order",
    icon: CiShoppingBasket,
  },
  {
    title: "Pay for your order",
    icon: RiQrScan2Line,
  },
  {
    title: "Track your order",
    icon: RiBankCardFill,
  },
  {
    title: "Cancel your order",
    icon: TbForbid2,
  },
  {
    title: "Create a return",
    icon: PiArrowsClockwiseBold,
  },
];
const questions = [
  "How to place an order",
  "what payments methods are accepted",
  "how can i track my order",
  "what is the return and refund policy",
  "how can i get started with shopay services",
];
const page = () => {
  return (
    <div className="py-12 px-6 ">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Support Center</h1>
        <p className="text-3xl font-semibold mb-4">
          Hello, How can we help you ?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex  items-center justify-center flex-col bg-slate-200 dark:bg-slate-700 py-12 px-8 rounded-md gap-8"
              >
                <Icon size={30} />
                <p className="text-lg  font-semibold text-center">
                  {card.title}
                </p>
              </div>
            );
          })}
        </div>

        <form class="flex items-center w-[550px] mx-auto">
          <div class="w-full">
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 px-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type a keyword like 'Cancel'..."
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
          >
            <IoMdSearch className="w-5  h-5" />
            <span class="sr-only">Search</span>
          </button>
        </form>
        <div className="mt-16 flex gap-16">
          <div>
            <p className="text-4xl w-[350px]">
              Frequently asked questions and anwers
            </p>
            <p>Answers to common questions</p>
          </div>
          <div className="flex flex-col gap-8">
            {questions.map((question, i) => {
              return (
                <div
                  key={`f_${i}`}
                  className="flex items-center justify-between gap-4"
                >
                  <p className="text-xl">{question}</p>
                  <FaPlus />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
