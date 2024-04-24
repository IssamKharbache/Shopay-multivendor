"use client";
import SearchForm from "../formInputs/SearchForm";

//NEXT IMPORTS
import Link from "next/link";

//ICONS
import { FaRegUser } from "react-icons/fa6";
import ThemeToogle from "@/components/ThemeToggle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "@/components/Logo";
import HelpModal from "./Modal";

const NavBar = () => {
  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <div className="flex items-center justify-between py-3 max-w-6xl mx-auto px-8 gap-8">
        {/* logo */}
        <Logo className="w-24" />
        {/* SEARCH */}
        <div className="flex-grow hidden sm:block">
          <SearchForm placeHolder="Search Products, Categories, Markets..." />
        </div>
        <div className="flex gap-8 ">
          <Link
            href="/login"
            className="flex items-center space-x-1  text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200"
          >
            <FaRegUser size={18} />
            <span className="font-semibold text-lg">Login</span>
          </Link>

          <HelpModal />

          <Link
            href="/cart"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
          >
            <AiOutlineShoppingCart
              size={25}
              className="text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200"
            />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </Link>
        </div>
        <ThemeToogle />
      </div>
    </div>
  );
};

export default NavBar;
