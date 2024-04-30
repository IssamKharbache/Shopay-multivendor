import CategoryList from "@/components/frontend/uicomponents/CategoryList";
import CommunityBlogs from "@/components/frontend/uicomponents/CommunityBlogs";
import Footer from "@/components/frontend/uicomponents/Footer";
import Hero from "@/components/frontend/uicomponents/Hero";
import MarketList from "@/components/frontend/uicomponents/MarketList";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function Home() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen ">
      <Hero />
      <MarketList />

      {categories.map((category, i) => {
        return (
          <div key={i} className="py-8 px-4 xl:px-0 ">
            <CategoryList key={i} category={category} />
          </div>
        );
      })}

      <div className="px-4 xl:px-0 ">
        <CommunityBlogs />
      </div>

      {/* <h2 className="text-7xl bg-slate-800 p-8 rounded-lg text-gray-300 font-semibold font-poppins shadow-2xl">
        Welcome to Shopay
      </h2>
      <Link
        className="my-4  font-poppins font-bold bg-blue-400 text-gray-800 hover:bg-blue-600 hover:text-gray-200 duration-200 p-4 rounded-md "
        href="/register-farmer"
      >
        Become a farmer Vendor or a Supplier
      </Link> */}
    </div>
  );
}
