"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
//SIDEBAR LINKS ICONS
import { LuLayoutGrid, LuLogOut } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { GrCatalog } from "react-icons/gr";
import { HiUsers } from "react-icons/hi";
import { FaChevronRight, FaShippingFast, FaChevronUp } from "react-icons/fa";
import { PiUsersFour } from "react-icons/pi";
import { PiFactoryDuotone } from "react-icons/pi";
import { GiFarmer } from "react-icons/gi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuBadgeDollarSign } from "react-icons/lu";
import { RiCommunityFill } from "react-icons/ri";
import { RiCoinsLine } from "react-icons/ri";
//CATALOG ICONS
import { RiCoupon4Line } from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { PiMonitorPlayLight } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";

//SHADCN COLLAPSIBLE
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "../Logo";
import { useSession } from "next-auth/react";
import handleLogout from "@/lib/handleLogout";
import { TbShoppingBag } from "react-icons/tb";

const SideBar = ({ sideBarOpen }) => {
  const [isCollapOpen, setIsCollapOpen] = useState(false);

  const { data: session, status } = useSession();
  const pathName = usePathname();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  //Links
  let sidebarLinks = [
    { title: "Customers", icon: HiUsers, href: "/dashboard/customers" },
    { title: "Orders", icon: FaShippingFast, href: "/dashboard/orders" },
    {
      title: "Sales",
      icon: RiCommunityFill,
      href: "/dashboard/sales",
    },
    { title: "Markets", icon: PiFactoryDuotone, href: "/dashboard/markets" },
    { title: "Farmers", icon: GiFarmer, href: "/dashboard/farmers" },
    { title: "Our Staff", icon: PiUsersFour, href: "/dashboard/staff" },
    {
      title: "Shopay Community",
      icon: RiCommunityFill,
      href: "/dashboard/community",
    },
    { title: "Wallet", icon: LuBadgeDollarSign, href: "/dashboard/wallet" },
    {
      title: "Online Store",
      icon: HiOutlineExternalLink,
      href: "/",
    },
    { title: "Settings", icon: CiSettings, href: "/dashboard/settings" },
  ];
  //catalog links
  let catalogLinks = [
    {
      title: "Products",
      icon: GiCardboardBoxClosed,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: IoLayersOutline,
      href: "/dashboard/categories",
    },

    { title: "Coupons", icon: RiCoupon4Line, href: "/dashboard/coupons" },
    {
      title: "Store Banners",
      icon: PiMonitorPlayLight,
      href: "/dashboard/banners",
    },
  ];

  //showing specific links depends on the role
  const role = session?.user?.role;
  if (role === "SELLER") {
    sidebarLinks = [
      {
        title: "Sales",
        icon: RiCoinsLine,
        href: "/dashboard/sales",
      },
      {
        title: "Seller Support",
        icon: MdOutlineContactSupport,
        href: "/dashboard/seller-support",
      },

      { title: "Wallet", icon: LuBadgeDollarSign, href: "/dashboard/wallet" },
      {
        title: "Online Store",
        icon: HiOutlineExternalLink,
        href: "/",
      },
      { title: "Settings", icon: CiSettings, href: "/dashboard/settings" },
    ];
    catalogLinks = [
      {
        title: "Products",
        icon: GiCardboardBoxClosed,
        href: "/dashboard/products",
      },
      { title: "Coupons", icon: RiCoupon4Line, href: "/dashboard/coupons" },
    ];
  }
  if (role === "USER") {
    sidebarLinks = [
      { title: "Profile", icon: FaShippingFast, href: "/dashboard/profile" },
      { title: "My Orders", icon: TbShoppingBag, href: "/dashboard/orders" },
      {
        title: "Online Store",
        icon: HiOutlineExternalLink,
        href: "/",
      },
    ];
    catalogLinks = [];
  }

  return (
    <div
      className={`${
        sideBarOpen ? "sm:left-0" : "left-[-400px]"
      } fixed bg-slate-200 dark:bg-slate-950  space-y-8 w-64 h-screen text-gray-900 dark:text-gray-300  left-0 top-0 font-poppins overflow-y-scroll duration-500`}
    >
      {/* logo */}
      <Logo className="flex mt-8 px-6 w-44" />
      <div className="space-y-8 flex flex-col   ">
        <Link
          href="/dashboard"
          className={
            pathName === "/dashboard"
              ? " flex items-center gap-3 text-md px-6 py-2  border-l-8  border-blue-500 text-blue-400"
              : "flex items-center gap-3 text-md px-6 py-2  hover:text-blue-400 "
          }
        >
          <LuLayoutGrid />
          <span>Dashboard</span>
        </Link>
        {/* CATALOGUE COLLAPSIBLE */}
        {catalogLinks.length > 0 && (
          <Collapsible>
            <CollapsibleTrigger
              onClick={() => setIsCollapOpen(!isCollapOpen)}
              className="flex items-center gap-6 group hover:text-blue-400"
            >
              <div className="flex items-center text-md gap-3  px-6 py-2 ">
                <GrCatalog />
                <span>Catalogue</span>
              </div>
              {isCollapOpen ? (
                <FaChevronUp />
              ) : (
                <FaChevronRight className="group-hover:rotate-90 duration-300" />
              )}
            </CollapsibleTrigger>

            <CollapsibleContent className="pl-10 pt-3  bg-slate-300 dark:bg-slate-700 rounded-md">
              {catalogLinks.map((catlink, i) => {
                const Icon = catlink.icon;
                return (
                  <Link
                    href={catlink.href}
                    key={i}
                    className={
                      pathName === catlink.href
                        ? "list-none flex w-full text-sm  px-4 py-3 rounded-l-xl   text-blue-500 duration-200 cursor-pointer "
                        : "list-none flex  text-sm px-4 py-3  hover:text-blue-400 duration-200 cursor-pointer "
                    }
                  >
                    <div className="flex gap-4 items-center">
                      <Icon size={20} />
                      <span>{catlink.title}</span>
                    </div>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* DASHBOARD */}
        {sidebarLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <Link
              key={i}
              href={link.href}
              className={
                link.href === pathName
                  ? " flex items-center gap-3 text-md px-6 py-2  border-l-8  border-blue-500 text-blue-400"
                  : "flex items-center gap-3 text-md px-6 py-2 hover:text-blue-400 duration-200   "
              }
            >
              <Icon size={20} />
              <span>{link.title}</span>
            </Link>
          );
        })}
        <div className="pb-10">
          <button
            onClick={handleLogout}
            className="flex items-center w-36 group mx-auto gap-4 bg-blue-400 px-4  rounded-md p-4 text-black hover:bg-blue-600  "
          >
            <LuLogOut className="group-hover:rotate-180 duration-300 " />
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
