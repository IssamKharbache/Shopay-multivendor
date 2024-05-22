import convertIsoToNormal from "@/lib/convertIsoToNormal";
import { generateSlug } from "@/lib/generateSlug";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderCard = ({ order }) => {
  const { orderItems } = order;

  if (orderItems.length === 0) {
    return null;
  }

  const subTotal = orderItems
    ?.reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <li className="overflow-hidden  bg-slate-200 dark:bg-slate-700 border border-gray-200 dark:border-gray-700 rounded-md">
      <div className="lg:flex">
        <div className="w-full border-b border-gray-200 lg:max-w-xs lg:border-b-0 lg:border-r ">
          <div className="px-4 py-6 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-1">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Order ID
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mt-0.5">
                  #{order.orderNumber}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Date
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mt-0.5">
                  {convertIsoToNormal(order.createdAt)}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Total Amount
                </p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-200 mt-0.5">
                  ${subTotal}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Order Status
                </p>
                <div className="mt-0.5 flex items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3 rounded-full text-white bg-amber-400 mr-1.5">
                    <svg
                      className="w-2 h-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold dark:text-gray-200 text-gray-900">
                    {order.orderStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-6 sm:p-6 lg:p-8">
          <ul className="space-y-7">
            {orderItems.length > 0 &&
              orderItems.map((item, i) => {
                const slug = generateSlug(item.title);
                return (
                  <li
                    key={i}
                    className="flex pb-10 sm:pb-6 border-b border-gray-300 dark:border-gray-600  "
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="object-cover rounded-lg w-28 h-28"
                        src={item.imageUrl}
                        alt={item.title}
                        height={250}
                        width={250}
                      />
                    </div>

                    <div className="flex flex-col justify-between flex-1 ml-5">
                      <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
                        <div>
                          <p className="text-base font-bold text-gray-900 dark:text-gray-200">
                            {item.title}
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 flex items-center justify-between">
                          <p className="text-sm font-bold text-left text-gray-500  dark:text-gray-400 ">
                            x{item.quantity}
                          </p>
                          <p className="text-base font-bold text-gray-900 dark:text-gray-200">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <div className="">
                        <div className="flex space-x-5">
                          <Link
                            href={`/products/${slug}`}
                            className="p-1 -m-1 text-sm font-medium duration-200 text-gray-500 dark:text-gray-400 dark:hover:text-gray-900 hover:text-gray-900 "
                          >
                            View Product
                          </Link>

                          <span className="text-gray-400 dark:text-gray-600">
                            {" "}
                            |{" "}
                          </span>

                          <a
                            href="#"
                            title=""
                            className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            {" "}
                            Similar Product{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="flex items-center mt-8 space-x-5">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold "
            >
              View Order
            </button>

            <Link
              href={`/dashboard/orders/${order.id}/invoice`}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold bg-slate-300 text-black hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-900 dark:text-gray-100  rounded-md transition-all "
            >
              View Invoice
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
