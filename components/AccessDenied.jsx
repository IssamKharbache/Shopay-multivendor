import Image from "next/image";
import Link from "next/link";
import React from "react";

const AccessDenied = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 py-12 ">
      <div className="w-[500px] h-[500px] mx-auto px-12">
        <Image
          src="/accessdenied.png"
          alt="Access denied"
          width={1500}
          height={1500}
          quality={80}
          className="relative w-full flex items-center justify-center "
        />
      </div>
      <p className="text-5xl font-semibold text-gray-900 dark:text-gray-200 flex flex-col items-center gap-8 text-center">
        You Don't have access to this page
        <Link
          href="/"
          className="bg-slate-400 text-black hover:bg-slate-500 hover:text-black dark:bg-slate-700 dark:text-white dark:hover:bg-slate-800 text-sm py-4 px-12 rounded-xl hover:bg-accent-hover duration-200 cursor-pointer"
        >
          Online Store
        </Link>
      </p>
    </main>
  );
};

export default AccessDenied;
