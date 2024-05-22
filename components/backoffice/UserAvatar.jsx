"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { CiLogout, CiSettings } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
import Link from "next/link";

import handleLogout from "@/lib/handleLogout";
import generateInitials from "@/lib/generateInitials";

const UserAvatar = ({ user = {} }) => {
  const { name, image, role } = user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {image ? (
          <Image
            src={image}
            width={200}
            height={200}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full"
            alt="profileimage"
          />
        ) : (
          <div className=" border-2 border-blue-600 dark:border-gray-900 dark:bg-slate-500 rounded-full w-9 h-9 flex p-4 items-center justify-center">
            <p className="font-semibold text-md text-gray-900 dark:text-gray-200">
              {generateInitials(name)}
            </p>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" m-2">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 cursor-pointer  rounded-md p-2"
          >
            <LuLayoutDashboard size={20} />
            <span className="text-lg">Dashboard</span>
          </Link>
        </DropdownMenuItem>
        {role === "USER" && (
          <DropdownMenuItem>
            <Link
              href="/dashboard/orders"
              className="flex gap-2 items-center p-2 cursor-pointer"
            >
              <TbShoppingBag size={20} />
              <span className="text-lg">My Orders</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Link
            href="/dashboard/profile"
            className="flex gap-2 p-2 cursor-pointer items-center"
          >
            <CiSettings size={20} />
            <span className="text-lg">Edit profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={handleLogout}
            className="flex gap-2 items-center p-2 cursor-pointer"
          >
            <CiLogout size={20} />
            <span className="text-lg">Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
