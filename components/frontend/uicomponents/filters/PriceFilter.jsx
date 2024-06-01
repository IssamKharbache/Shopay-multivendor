"use client";
import { Circle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const PriceFilter = ({ slug, isSearch }) => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const useParams = useSearchParams();
  //params
  const min = useParams.get("min") || 0;
  const max = useParams.get("max") || "";
  const search = useParams.get("search") || "";
  const page = useParams.get("page") || 1;
  const sort = useParams.get("sort") || "asc";

  //list of price ranges
  const priceRanges = [
    {
      displayName: "Under 300$",
      max: 300,
    },
    { displayName: "Between 300$ and 700$", min: 300, max: 700 },
    { displayName: "Between 700$ and 1000$", min: 700, max: 1000 },
    { displayName: "Between 1000$ and 2000$", min: 1000, max: 2000 },
    { displayName: "Between 2000$ and 3000$", min: 2000, max: 3000 },
    { displayName: "Above 3000$", min: 3000 },
  ];

  const onSubmit = (data) => {
    const { min, max } = data;

    if (!min || !max) {
      toast.error("Please enter a Maximum and Minimum Price to Search", {
        position: "top-center",
      });
      return;
    }
    if (min > max) {
      toast.error("The Minimum Price Should be less than The Maximum Price", {
        position: "top-center",
      });
      return;
    } else if (min && max) {
      if (isSearch) {
        router.push(
          `/search?search=${search}&page=${page}&sort=asc&min=${min}&max=${max}`
        );
      } else {
        router.push(
          `/category/${slug}?page=${page}&sort=asc&min=${min}&max=${max}`
        );
      }
    } else if (max) {
      if (isSearch) {
        router.push(
          `/search?search=${search}&page=${page}&sort=asc&min=${min}&max=${max}`
        );
      } else {
        router.push(
          `/category/${slug}?page=${page}&sort=asc&min=${min}&max=${max}`
        );
      }
    } else if (min) {
      if (isSearch) {
        router.push(
          `/search?search=${search}&page=${page}&sort=asc&min=${min}&max=${max}`
        );
      } else {
        router.push(
          `/category/${slug}?page=${page}&sort=asc&min=${min}&max=${max}`
        );
      }
    }
  };
  return (
    <div className="pb-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <h2 className=" text-gray-800 dark:text-gray-300 font-semibold py-2">
            Price Sorting
          </h2>
          <Link
            href={
              isSearch
                ? `/search?search=${search}&page=${page}`
                : `/category/${slug}?page=${page}&sort=asc&min=0&max=`
            }
            className="bg-red-500 hover:bg-red-600 py-2 text-center px-4 duration-200 text-white items-center rounded-sm"
          >
            Reset Filters
          </Link>
        </div>

        {/* Filters */}
        {priceRanges.map((range, i) => {
          //getting the link depends on the range
          const href = isSearch
            ? `?${new URLSearchParams({
                search,
                page,
                sort,
                min: range.min || 0,
                max: range.max || "",
              })}`
            : `?${new URLSearchParams({
                page,
                sort,
                min: range.min || 0,
                max: range.max || 0,
              })}`;

          return (
            <div key={i} className="flex flex-col gap-2">
              <Link
                className={`${
                  (range.min && range.min == min) ||
                  (range.max && range.max == max) ||
                  (range.min &&
                    range.mix &&
                    range.min == min &&
                    range.max == max)
                    ? "border-blue-500 text-blue-500 flex items-center   justify-between border  dark:text-gray-300  rounded-md px-4 py-2"
                    : "flex items-center justify-between border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300  rounded-md px-4 py-2 "
                }`}
                href={`${href}`}
              >
                {range.displayName}
                <Circle
                  className={`${
                    (range.min && range.min == min) ||
                    (range.max && range.max == max) ||
                    (range.min &&
                      range.mix &&
                      range.min == min &&
                      range.max == max)
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
                />
              </Link>
            </div>
          );
        })}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Custome Price Range</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            <input
              {...register("min")}
              type="number"
              className="block w-full rounded-sm border-0 py-3 text-gray-900 dark:text-gray-300 dark:bg-gray-800 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-sm sm:placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="Min"
            />
            <input
              {...register("max")}
              type="number"
              placeholder="Max"
              className="block w-full rounded-sm border-0 py-3 text-gray-900 dark:text-gray-300 dark:bg-gray-800 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-sm sm:placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="bg-blue-400 py-3 px-4 rounded-md hover:bg-blue-600 duration-200 text-white"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
