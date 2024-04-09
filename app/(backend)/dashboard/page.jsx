import CustomDataTable from "@/components/backoffice/dashboardComponents/CustomDataTable";
import DashboardCharts from "@/components/backoffice/dashboardComponents/DashboardCharts";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/dashboardComponents/LargeCards";
import SmallersCards from "@/components/backoffice/dashboardComponents/SmallersCards";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading title="Dashboard overview" />
      {/* Large card */}
      <LargeCards />
      {/* Small cards */}
      <SmallersCards />
      {/* charts */}
      <DashboardCharts />
      {/* RECENT ORDERS TABLE*/}
      {/* <CustomDataTable /> */}
    </div>
  );
};
export default page;
