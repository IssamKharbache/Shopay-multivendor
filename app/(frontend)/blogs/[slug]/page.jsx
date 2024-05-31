import convertIsoToNormal from "@/lib/convertIsoToNormal";
import { getData } from "@/lib/getData";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import RecentBlogs from "@/components/frontend/uicomponents/RecentBlogs";
import CategoryList from "@/components/frontend/uicomponents/CategoryList";

const page = async ({ params: { slug } }) => {
  const specificBlog = await getData(`blogs/details/${slug}`);
  const normalDate = convertIsoToNormal(specificBlog.createdAt);
  const blogs = await getData("blogs");
  const recentBlogs = blogs.filter((blog) => blog.id !== specificBlog.id);
  //get the category list to fetch the products under this category
  const categoryBlog = await getData(`categories/${specificBlog.categoryId}`);

  return (
    <>
      <section className="py-12   mt-8 rounded-md bg-slate-300 dark:bg-slate-700 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:gap-x-12">
            <div className="bg-slate-200 dark:bg-slate-600 lg:col-span-5 rounded-xl">
              <div className="px-4 py-5 sm:p-6 ">
                <section>
                  <div>
                    <div className="mx-auto">
                      <div className="max-w-3xl mx-auto">
                        <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                          {normalDate}
                        </p>
                        <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-gray-200 sm:text-5xl">
                          {specificBlog.title}
                        </h1>
                      </div>

                      <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
                        <Image
                          width={450}
                          height={450}
                          className="object-cover w-full h-full"
                          src={specificBlog.imageUrl}
                          alt={specificBlog.slug}
                        />
                      </div>

                      <div className="py-8">
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-6 border-b border-gray-400 dark:border-gray-700 py-4">
                          {specificBlog.description}
                        </p>

                        <article className="py-4">
                          {/* actuall blog */}
                          {parse(specificBlog.content)}
                        </article>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Recent Blogs
              </p>
              {recentBlogs.slice(0, 8).map((blog, index) => (
                <RecentBlogs blog={blog} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 px-4 xl:px-0 ">
        <CategoryList category={categoryBlog} />
      </div>
    </>
  );
};

export default page;
