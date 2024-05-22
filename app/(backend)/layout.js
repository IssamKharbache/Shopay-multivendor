"use client";
import NavBar from "@/components/backoffice/NavBar";
import SideBar from "@/components/backoffice/SideBar";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function layout({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex ">
      {/* Side bar */}
      <SideBar sideBarOpen={sideBarOpen} />
      <div
        className={`${
          sideBarOpen
            ? "sm:ml-64 ml-0 flex-grow min-h-screen"
            : " ml-0 flex-grow min-h-screen"
        }`}
      >
        {/*  header*/}
        <NavBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        {/* Main */}
        <main className="p-8 mt-16 bg-slate-50 dark:bg-slate-900 text-gray-300 min-h-screen">
          {children}
        </main>
      </div>
      {/* Main body */}
    </div>
  );
}
