import CategoryList from "@/components/frontend/uicomponents/CategoryList";
import CommunityBlogs from "@/components/frontend/uicomponents/CommunityBlogs";
import Hero from "@/components/frontend/uicomponents/Hero";
import MarketList from "@/components/frontend/uicomponents/MarketList";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";

export default async function Home() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((category) => {
    return category.products.length > 3;
  });
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen ">
      {/* header */}
      <Hero />
      {/* markets component */}
      <MarketList />
      {/* categories  */}
      {categories.map((category, i) => {
        return (
          <div key={i} className="py-8 px-4 xl:px-0 ">
            <CategoryList key={i} category={category} />
          </div>
        );
      })}
      {/* blogs */}
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
