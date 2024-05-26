import DashboardCharts from "@/components/backoffice/dashboardComponents/DashboardCharts";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/dashboardComponents/LargeCards";
import SmallersCards from "@/components/backoffice/dashboardComponents/SmallersCards";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

import UserDashboard from "@/components/backoffice/dashboardComponents/UserDashboard";
import SellerDashboard from "@/components/backoffice/dashboardComponents/SellerDashboard";
import { getData } from "@/lib/getData";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { role } = user;

  //filtering products and sales that belong to the seller
  const sales = await getData("sales");
  const orders = await getData("orders");

  if (role === "SELLER") {
    return <SellerDashboard />;
  } else if (role === "USER") {
    return <UserDashboard />;
  } else {
    return (
      <div>
        <Heading title="Dashboard overview" />
        {/* Large card */}
        <LargeCards sales={sales} />
        {/* Small cards */}
        <SmallersCards orders={orders} />
        {/* charts */}
        <DashboardCharts />
      </div>
    );
  }
};
export default page;
