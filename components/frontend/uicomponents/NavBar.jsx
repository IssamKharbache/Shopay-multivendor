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

const NavBar = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

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
          <CartCount />
          <HelpModal />
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
        <ThemeToogle />
      </div>
    </div>
  );
};

export default NavBar;
