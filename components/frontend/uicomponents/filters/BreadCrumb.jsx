import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ title }) => {
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center">
        <Link href="/">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <p href="#">{title}</p>
      </div>

      <p>1-40 of 1,000 results</p>
    </div>
  );
};

export default BreadCrumb;
