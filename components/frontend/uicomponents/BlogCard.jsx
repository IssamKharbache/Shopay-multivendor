import convertIsoToNormal from "@/lib/convertIsoToNormal";
import { getData } from "@/lib/getData";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = async ({ blog }) => {
  const category = await getData(`categories/${blog.categoryId}`);

  return (
    <>
      <div className="group">
        <div className="relative">
          <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
            <Image
              width={250}
              height={250}
              className="object-cover w-full h-44 transition-all duration-200 transform group-hover:scale-110"
              src={blog.imageUrl}
              alt={blog.title}
            />
          </div>
          <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
            {category.title}
          </span>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-500">
          {convertIsoToNormal(blog.createdAt)}
        </p>
        <p className="mt-4 text-xl font-bold leading-tight text-gray-900 dark:text-gray-200 xl:pr-8">
          <Link href="#" title="" className="line-clamp-2">
            {blog.title}
          </Link>
        </p>
        <div className="mt-6">
          <Link
            href="#"
            className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-gray-900 dark:text-gray-200 uppercase border-b border-gray-900 dark:border-gray-200 group"
          >
            Continue Reading
            <MoveRight className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
