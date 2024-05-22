import OrderCard from "@/components/backoffice/order/OrderCard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return;
  const userId = session?.user?.id;
  //fetch orders by userId
  const orders = await getData(`orders/user/${userId}`);
  if (orders.length === 0) {
    return (
      <div className="flex flex-col gap-12 lg:flex-row items-center justify-center min-h-[700px]">
        <div>
          <Image width={256} height={256} alt="No orders" src="/noorders.png" />
        </div>
        <div className="flex flex-col items-center justify-center  gap-8 ">
          <p className="text-4xl  font-semibold">You Have No Orders Yet </p>

          <Link
            href="/"
            className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-700 duration-200 md:text-xl"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 sm:text-3xl">
              Orders Details
            </h1>
            <p className="mt-2 text-sm font-normal text-gray-500">
              Check the status of recent and old orders & discover more products
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
            {orders.map((order, i) => {
              return <OrderCard order={order} key={i} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
