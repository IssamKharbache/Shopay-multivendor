import CategoryList from "@/components/frontend/uicomponents/CategoryList";
import CommunityBlogs from "@/components/frontend/uicomponents/CommunityBlogs";
import Hero from "@/components/frontend/uicomponents/Hero";
import MarketList from "@/components/frontend/uicomponents/MarketList";

import { getData } from "@/lib/getData";

export default async function Home() {
  const blogs = await getData("blogs");
  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((category) => {
    return category.products.length > 3;
  });

  return (
    <div className="min-h-screen ">
      {/* header */}
      {/* <Hero /> */}
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
        <CommunityBlogs
          blogs={blogs.slice(0, 3)}
          isAllBlogs={false}
          title="Read The Latest Blogs"
        />
      </div>
    </div>
  );
}
