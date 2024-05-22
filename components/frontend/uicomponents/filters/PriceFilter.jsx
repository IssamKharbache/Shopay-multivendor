"use client";
import { Circle } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const PriceFilter = ({ slug }) => {
  const priceRanges = [
    {
      displayName: "Under 300$",
      max: 300,
    },
    { displayName: "Between 300$ and 700$", min: 300, max: 700 },
    { displayName: "Above 700$", min: 700 },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="bg-blue-400 text-white py-2 px-2 rounded-sm">
            Price Sorting
          </h2>
          <Link
            href={`/category/${slug}?sort=asc`}
            className="bg-red-500 py-2 text-center px-4 text-white items-center rounded-sm"
          >
            Reset
          </Link>
        </div>

        {/* Filters */}
        {priceRanges.map((priceRange, i) => {
          //getting the link depends on the range
          const href =
            priceRange.min && priceRange.max
              ? `/category/${slug}?sort=asc&min=${priceRange.min}&max=${priceRange.max}`
              : priceRange.min && !priceRange.max
              ? `/category/${slug}?sort=asc&min=${priceRange.min}`
              : `/category/${slug}?sort=asc&max=${priceRange.max}`;

          return (
            <div key={i} className="flex flex-col gap-2">
              <Link
                className={`${
                  "" === href
                    ? "border-blue-500 text-blue-500 flex items-center justify-between border  dark:text-gray-300  rounded-md px-4 py-2"
                    : "flex items-center justify-between border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300  rounded-md px-4 py-2"
                }`}
                href={`${href}`}
              >
                {priceRange.displayName}
                <Circle
                  className={`${
                    "" === href ? "text-blue-500" : "text-gray-500"
                  }`}
                />{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceFilter;
