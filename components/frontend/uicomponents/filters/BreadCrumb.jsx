"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const BreadCrumb = ({ title, resultCount }) => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;
  const pageSize = 3;
  const startRange = (currentPage - 1) * pageSize + 1;
  const endRange = Math.min(currentPage * pageSize, resultCount);
  //page 1 : 1-3
  //page 2: 4-6
  //page 3 : 7-9
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center">
        <Link href="/">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <p>{title}</p>
      </div>

      <p>
        {startRange}-{endRange} of {resultCount} results
      </p>
    </div>
  );
};

export default BreadCrumb;
