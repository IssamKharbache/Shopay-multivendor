import Link from "next/link";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import TrainingCarousel from "./carousels/TrainingCarousel";
import { getData } from "@/lib/getData";

const CommunityBlogs = async () => {
  const blogs = await getData("blogs");
  return (
    <div className=" bg-gray-200 border  border-gray-200 rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700  overflow-hidden mb-12 mt-4 ">
      <div className="flex justify-between items-center bg-slate-300 text-gray-900 px-8 py-4  dark:bg-slate-800 dark:text-gray-200 font-semibold text-center ">
        <h2>Shopay Community</h2>
        <Link
          href="#"
          className="flex items-center  gap-2 bg-blue-400 text-white hover:bg-blue-600  dark:bg-blue-600 dark:hover:bg-blue-800 dark:text-gray-200 rounded-lg p-2 duration-200"
        >
          See All
          <HiOutlineExternalLink />
        </Link>
      </div>

      <TrainingCarousel blogs={blogs} />
    </div>
  );
};

export default CommunityBlogs;
