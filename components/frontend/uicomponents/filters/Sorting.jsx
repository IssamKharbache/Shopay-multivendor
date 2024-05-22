"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sorting = ({ title, slug }) => {
  const pathName = usePathname();
  const sortingLinks = [
    { title: "A-Z", href: `/category/${slug}` },
    {
      title: "Price - High to Low",
      href: `/category/${slug}?sort=desc`,
    },
    {
      title: "Price - Low to High",
      href: `/category/${slug}?sort=asc`,
    },
  ];

  return (
    <div className="flex text-2xl items-center justify-between">
      <h2>
        <span className="font-medium text-3xl uppercase">{title}</span>
      </h2>
      <div className="flex gap-2 text-sm items-center">
        <p className="font-semibold">Sort by : </p>
        <div className="flex ">
          {sortingLinks.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${
                  pathName === link.href ? "bg-blue-400 text-white" : ""
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
