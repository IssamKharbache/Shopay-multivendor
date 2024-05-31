import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";
import OverviewCards from "./OverviewCards";
import { CiCircleInfo } from "react-icons/ci";

const SellerDashboard = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { id, status = false } = user;
  //filtering products and sales that belong to the seller
  const sales = await getData("sales");
  const salesById = sales.filter((sale) => sale.vendorId === id);
  const products = await getData("products");
  const productsById = products.filter((product) => product.userId === id);
  if (status) {
    return (
      <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <OverviewCards sales={salesById} products={productsById} />
      </div>
    );
  } else {
    return (
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 text-red-500 border border-red-300 rounded-lg bg-red-50 dark:bg-red-50 dark:text-red-500 dark:border-red-300 pt-4"
        role="alert"
      >
        <div className="flex items-center">
          <CiCircleInfo className="flex-shrink-0 w-12 h-12 me-2" />
          <span className="sr-only">Info</span>
          <h3 className="text-2xl font-medium">Account under review</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          <h1>
            Your account is currently under view.Please note that it may take
            24-48 hours for approval.Thank you for you patience
          </h1>
        </div>
      </div>
    );
  }
};

export default SellerDashboard;
