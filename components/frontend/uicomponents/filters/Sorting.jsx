"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Sorting = ({ title, slug, isSearch }) => {
  const params = useSearchParams();
  const sort = params.get("sort");
  const page = params.get("page") || 1;
  const min = params.get("min") || 0;
  const max = params.get("max") || "";
  const search = params.get("search") || "";

  const sortingLinks = [
    {
      title: "Relevance",
      href: isSearch
        ? `/search?search=${search}&page=${page}`
        : `/category/${slug}`,
      params: null,
    },
    {
      title: "Price - High to Low",
      href: isSearch
        ? `/search?search=${search}&sort=desc&page=${page}&min=${min}&max=${max}`
        : `/category/${slug}?sort=desc&page=${page}&min=${min}&max=${max}`,
      params: "desc",
    },
    {
      title: "Price - Low to High",
      href: isSearch
        ? `/search?search=${search}&sort=asc&page=${page}&min=${min}&max=${max}`
        : `/category/${slug}?sort=asc&page=${page}&min=${min}&max=${max}`,
      params: "asc",
    },
  ];

  return (
    <div className="flex text-2xl items-center justify-between">
      <h2>
        <span className={`font-medium text-3xl ${!isSearch && " uppercase"}`}>
          {isSearch ? `Search Result - ${title}` : title}
        </span>
      </h2>
      <div className="flex gap-2 text-sm items-center">
        <p className="font-semibold">Sort by : </p>
        <div className="flex ">
          {sortingLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${
                  sort === link.params ? "bg-blue-400 text-white" : ""
                } border border-gray-400 dark:border-gray-700   px-3 py-2`}
                href={link.href}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
