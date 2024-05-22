"use client";
import Logo from "@/components/Logo";
import convertIsoToNormal from "@/lib/convertIsoToNormal";
import { useRef } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { useReactToPrint } from "react-to-print";
import lightLogo from "@/public/logoLight.svg";
import Image from "next/image";
export default function SalesInvoice({ order }) {
  //order information
  const { orderItems } = order;
  const invoiceDate = convertIsoToNormal(order.createdAt);

  const subTotal = orderItems
    .reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.quantity;
    }, 0)
    .toFixed(2);
  const tax = 20;
  const total = (Number(subTotal) + Number(tax)).toFixed(2);
  //end order information

  //print the invoice
  const invoiceRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });
  return (
    <div className="flex flex-col">
      <div className="flex items-end justify-end mb-6">
        <button
          onClick={handlePrint}
          type="button"
          className="inline-flex gap-4 items-center justify-center px-4 py-3 bg-slate-500 text-white hover:bg-slate-700  dark:bg-slate-700 dark:hover:bg-slate-800  dark:text-white text-sm font-bold  duration-200 rounded-md  "
        >
          <HiOutlineDownload size={20} />
          <span>Download / Print Invoice</span>
        </button>
      </div>
      {/* invoice */}
      <div ref={invoiceRef}>
        <div className="max-w-4xl mx-auto border text-slate-900 dark:text-slate-200 border-gray-500 p-8 rounded-sm ">
          {/* Header */}
          <div className="flex justify-between border-b border-gray-500 pb-8">
            <div className="flex flex-col">
              <h2 className="text-gray-600">Bill From:</h2>
              <p className="font-semibold">Shopay Ecommerce</p>
              <p className="font-semibold">150 Street highway</p>
              <p className="font-semibold">Canada</p>
              <p className="font-semibold">shopay@gmail.com</p>
            </div>
            <div className="pt-6">
              <Image
                src="/shopay.png"
                width={200}
                height={200}
                alt="Shopay logo"
              />
            </div>
          </div>
          {/* Header End */}
          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2 className="text-gray-600">Bill To:</h2>
              <p className="font-semibold">
                {order.firstName} {order.lastName}
              </p>
              <p className="font-semibold">{order.streetAddress}</p>
              <p className="font-semibold">{order.country}</p>
              <p className="font-semibold">{order.email}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p>Invoice </p>
                <p className="font-semibold">#{order.orderNumber}</p>
              </div>
              <div className="flex justify-between gap-6">
                <p>Invoice Date</p>
                <p className="font-semibold">{invoiceDate}</p>
              </div>
              <div className="flex justify-between">
                <p>Amount Due</p>
                <p className="font-semibold">${subTotal}</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Item
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item, i) => {
                  const itemSubtotal = item.price * item.quantity;

                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white line-clamp-1"
                      >
                        {item.title}
                      </th>
                      <td className="px-6 py-4">{item.quantity}</td>

                      <td className="px-6 py-4">${itemSubtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>NOTES</h2>
              <p>Free Shipping for 30 Days Money back guarantee</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <p>SubTotal</p>
                <p className="font-semibold text-lg">${subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p className="font-semibold text-lg">${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p className="font-semibold text-lg">${total}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-8 ">
            <Image
              src="/shopay.png"
              width={200}
              height={200}
              alt="Shopay logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
