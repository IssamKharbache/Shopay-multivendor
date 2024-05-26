import React from "react";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center py-12">
        <h2 className="bg-slate-300 dark:bg-slate-800 font-semibold py-4 px-8 rounded-lg mb-4">
          Choose a plan that suits you
        </h2>
        <p className="text-md w-[700px] text-center">
          Our dynamic pricing strategy in our platform ensures competitive rates
          by allowing vendors to set their own prices while incorporating
          automated discounts and promotions to attract buyers.
        </p>
      </div>
      <PricingCards />
    </div>
  );
};

export default Pricing;
