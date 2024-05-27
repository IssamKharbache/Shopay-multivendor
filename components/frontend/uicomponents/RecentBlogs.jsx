import convertIsoToNormal from "@/lib/convertIsoToNormal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentBlogs = ({ blog }) => {
  const normalDate = convertIsoToNormal(blog.createdAt);
  return (
    <div className="mt-6 space-y-5">
      <div className="relative overflow-hidden transition-all duration-200 bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900  rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1">
        <div className="p-4">
          <div className="flex flex-col items-start lg:items-center">
            <Image
              width={450}
              height={450}
              className="object-cover w-full mb-3 h-20 rounded-lg shrink-0"
              src={blog.imageUrl}
              alt={blog.slug}
            />
            <div className="ml-3">
              <p className="text-lg leading-7 font-bold text-gray-900 dark:text-gray-200 mt-2.5">
                <Link href={`/blogs/${blog.slug}`} className="line-clamp-2">
                  {blog.description}
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </Link>
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                {normalDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
