import React from "react";
import MarketCarousel from "./carousels/MarketCarousel";

import { FaArrowRight } from "react-icons/fa6";
import { getData } from "@/lib/getData";

const MarketList = async () => {
  const markets = await getData("markets");
  return (
    <div className="rounded-lg px-4 xl:px-0">
      <h2 className="text-2xl text-gray-900 dark:text-gray-200 text-center p-4  font-semibold bg-slate-300 dark:bg-slate-800 rounded-t-lg">
        Brands
        <p className="text-sm font-medium pt-2 flex items-center justify-center gap-2">
          Swipe for more
          <FaArrowRight />
        </p>
      </h2>{" "}
      {/* MARKET SLIDER HERE */}
      <MarketCarousel markets={markets} />
    </div>
  );
};

export default MarketList;
