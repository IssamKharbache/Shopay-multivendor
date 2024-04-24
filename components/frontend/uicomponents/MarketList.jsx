import React from "react";
import MarketCarousel from "./carousels/MarketCarousel";

import { FaArrowRight } from "react-icons/fa6";

const MarketList = () => {
  return (
    <div className="rounded-lg ">
      <h2 className="text-2xl text-gray-900 dark:text-gray-200 text-center p-4  font-semibold bg-slate-300 dark:bg-slate-800 rounded-t-lg">
        Shop My Market
        <p className="text-sm font-medium pt-2 flex items-center justify-center gap-2">
          Swipe for more
          <FaArrowRight />
        </p>
      </h2>{" "}
      {/* MARKET SLIDER HERE */}
      <MarketCarousel />
    </div>
  );
};

export default MarketList;
