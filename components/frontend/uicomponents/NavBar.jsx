"use client";
import SearchForm from "../formInputs/SearchForm";

//NEXT IMPORTS
import Link from "next/link";

//ICONS
import { FaRegUser } from "react-icons/fa6";
import ThemeToogle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import HelpModal from "./Modal";
import CartCount from "./cartComponents/CartCount";
import { useSession } from "next-auth/react";

import UserAvatar from "@/components/backoffice/UserAvatar";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p></p>;
  }

  return (
    <div className="bg-slate-300 h-20 md:h-auto py-2 dark:bg-slate-800">
      <div className="flex items-center justify-between py-3 max-w-6xl mx-auto px-8 gap-8">
        {/* logo */}
        <Logo className="w-24 flex" />
        {/* SEARCH */}
        <div className="flex-grow hidden sm:block">
          <SearchForm placeHolder="Search Products, Categories, Markets..." />
        </div>
        {/* desktop navbar */}
        <div className="hidden md:flex items-center gap-6">
          <CartCount />
          <HelpModal />
          <ThemeToogle />
          {status === "unauthenticated" ? (
            <Link
              href="/login"
              className="flex items-center space-x-1  text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200"
            >
              <FaRegUser size={18} />
              <span className="font-semibold text-lg">Login</span>
            </Link>
          ) : (
            <UserAvatar user={session?.user} />
          )}
        </div>
        {/* mobile nav */}

        <div className="flex md:hidden items-center gap-6">
          <ThemeToogle />
          {!isOpen ? (
            <CiMenuFries
              onClick={() => setIsOpen(true)}
              className="font-semibold text-2xl"
            />
          ) : (
            <GrClose
              onClick={() => setIsOpen(false)}
              className="font-semibold text-2xl"
            />
          )}
        </div>
        <div
          className={`${
            isOpen ? "ml-0" : "-ml-[600px]"
          } flex  md:hidden absolute top-20 left-0 items-center justify-center  bg-slate-400 dark:bg-slate-700 w-screen h-screen z-10 duration-700`}
        >
          <div className="flex flex-col gap-8 items-center">
            {status === "unauthenticated" ? (
              <Link
                href="/login"
                className="flex items-center space-x-1  text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200"
              >
                <FaRegUser size={18} />
                <span className="font-semibold text-lg">Login</span>
              </Link>
            ) : (
              <UserAvatar user={session?.user} />
            )}
            <CartCount />
            <HelpModal />
            <Link
              onClick={() => setIsOpen(false)}
              href="/register"
              className="flex items-center space-x-1 font-semibold text-lg  text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
