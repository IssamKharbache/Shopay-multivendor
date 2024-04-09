import React from "react";
import Link from "next/link";
import Heading from "@/components/backoffice/Heading";

//ICONS
import { FaPlus } from "react-icons/fa";

const PageHeader = ({ heading, link, buttonTitle }) => {
  return (
    <div className="flex justify-between items-center  dark:border-slate-300 py-4 mb-8 pt-12">
      <Heading title={heading} />
      <Link
        className="flex items-center gap-4 rounded-md px-6 py-3 sm:px-3 sm:py-3 bg-blue-400 text-gray-800 hover:bg-blue-600 hover:text-white duration-300 text-base sm:text-lg"
        href={link}
      >
        <FaPlus size={15} />
        <span className="font-poppins hidden sm:block">{buttonTitle}</span>
      </Link>
    </div>
  );
};

export default PageHeader;
