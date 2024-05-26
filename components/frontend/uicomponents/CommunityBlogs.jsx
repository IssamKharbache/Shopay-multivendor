import React from "react";
import { getData } from "@/lib/getData";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const CommunityBlogs = async () => {
  const blogs = await getData("blogs");
  return (
    <section className="py-12 bg-slate-200 dark:bg-slate-700 rounded-md sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className=" flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 sm:text-4xl">
              Read latest blogs
            </h2>
            <p className="mt-5 text-base font-normal leading-7 text-gray-500">
              You can find here multiple blogs that can help you become a better
              seller !
            </p>
          </div>
          <div className="">
            <Link
              className="flex items-center gap-4 bg-slate-300 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-900 duration-200 py-3 px-4  text-center rounded-full font-semibold  "
              href="#"
            >
              See All Blogs
              <FiExternalLink />
            </Link>
          </div>
        </div>
        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
          {blogs.slice(0, 3).map((blog, i) => {
            return <BlogCard key={i} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityBlogs;
