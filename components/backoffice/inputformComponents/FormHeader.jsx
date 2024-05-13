"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";

const FormHeader = ({ headerTitle }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-12 mb-12 bg-slate-300 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{headerTitle}</h2>
      <button onClick={() => router.back()} className="text-2xl ">
        <MdClose />
      </button>
    </div>
  );
};

export default FormHeader;
