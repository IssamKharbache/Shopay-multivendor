"use client";
import Image from "next/image";

//NAVBAR ICONS
import { HiMenu } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";

//SHADCN UI DROPDOWN
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//DROP DOWN ICONS
import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import ThemeToogle from "../ThemeToggle";
import Link from "next/link";
import Logo from "../Logo";
import UserAvatar from "./UserAvatar";

const NavBar = ({ sideBarOpen, setSideBarOpen }) => {
  const user = {};
  return (
    <div
      className={`flex items-center   justify-between font-poppins bg-slate-200 dark:bg-slate-800
      text-gray-500 left-0 sm:pr-[18rem] dark:text-gray-300 w-full h-20 px-8 py-8 fixed top-0   z-50 pr-[2rem]  ${
        sideBarOpen ? "sm:left-64" : "left-0 sm:pr-[4rem]"
      }`}
    >
      {/* Icons */}
      {/* MENU TOOGLE */}
      <div>
        {sideBarOpen ? (
          <TfiClose
            onClick={() => setSideBarOpen(!sideBarOpen)}
            size={20}
            className="text-gray-700 dark:text-gray-200 cursor-pointer"
          />
        ) : (
          <HiMenu
            onClick={() => setSideBarOpen(!sideBarOpen)}
            size={25}
            className="text-gray-700 dark:text-gray-200 cursor-pointer"
          />
        )}
      </div>

      <div className="absolute right-[44%] flex sm:hidden">
        <Logo className="w-24 sm:hidden " />
      </div>

      <div className="flex space-x-3">
        {/* THEME TOOGLE */}
        <ThemeToogle />
        {/* NOTIFICATIONS DROP DOWN */}
        <DropdownMenu>
          {/* TRIGGER */}
          <DropdownMenuTrigger className="relative">
            <span className="sr-only">Notifications</span>
            <div className="absolute  inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs font-bold text-white bg-red-500   rounded-full -top-1 -end-1 sm:-top-2 dark:border-gray-900">
              20
            </div>

            <IoIosNotificationsOutline className="text-gray-700 dark:text-gray-300 text-3xl sm:text-4xl" />
          </DropdownMenuTrigger>
          {/* CONTENT */}
          <DropdownMenuContent>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* FIRST NOTIFICATION */}
            <DropdownMenuItem className="flex gap-3">
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-semibold font-poppins text-base">
                  Water melon is out of stock
                </p>
                <div className="flex items-center gap-4">
                  <span className="bg-red-700 text-white rounded-lg px-2">
                    Stock out
                  </span>
                  <p className="text-base">25-dec-2023 | 21:05 </p>
                </div>
              </div>
              <div className="px-4">
                <button className="bg-red-800 text-white p-1 rounded-full hover:opacity-75 duration-300">
                  {" "}
                  <TfiClose />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* SECOND NOTIFICATION */}
            <DropdownMenuItem className="flex gap-3">
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-semibold font-poppins text-base">
                  Order by omar completed
                </p>
                <div className="flex items-center gap-4">
                  <span className="bg-green-700 text-white rounded-lg px-2">
                    Stock in
                  </span>
                  <p className="text-base">25-dec-2023 | 21:05 </p>
                </div>
              </div>
              <div className="px-4">
                <button className="bg-red-800 text-white p-1 rounded-full hover:opacity-75 duration-300">
                  {" "}
                  <TfiClose />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        {/* PROFILE DROP DOWN */}
        <UserAvatar user={user} />
      </div>
    </div>
  );
};

export default NavBar;
