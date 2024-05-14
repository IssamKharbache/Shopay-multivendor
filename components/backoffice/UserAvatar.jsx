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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import handleLogout from "@/lib/handleLogout";

const UserAvatar = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          src="/profile.png"
          width={200}
          height={200}
          className="w-7 h-7 sm:w-9 sm:h-9 rounded-full"
          alt="profile"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pr-5">
        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 cursor-pointer"
          >
            <LuLayoutDashboard size={20} />
            <span className="text-lg">Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 cursor-pointer">
          <CiSettings size={20} />
          <span className="text-lg">Edit profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex gap-2 cursor-pointer"
        >
          <CiLogout size={20} />
          <span className="text-lg">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
