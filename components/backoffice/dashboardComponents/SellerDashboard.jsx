import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";
import OverviewCards from "./OverviewCards";

const SellerDashboard = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { id } = user;
  //filtering products and sales that belong to the seller
  const sales = await getData("sales");
  const salesById = sales.filter((sale) => sale.vendorId === id);
  const products = await getData("products");
  const productsById = products.filter((product) => product.userId === id);

  return (
    <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <OverviewCards sales={salesById} products={productsById} />
    </div>
  );
};

export default SellerDashboard;
