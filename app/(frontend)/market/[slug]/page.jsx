import BreadCrumbs from "@/components/frontend/uicomponents/BreadCrumbs";
import CategoryList from "@/components/frontend/uicomponents/CategoryList";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";

const page = async ({ params: { slug } }) => {
  const market = await getData(`markets/details/${slug}`);
  const marketCategoriesIds = market.categoryIds;

  const categoriesData = await getData("categories");
  const categories = categoriesData.filter((category) => {
    return category.products.length > 3;
  });

  const marketCategories = categories.filter((category) =>
    marketCategoriesIds.includes(category.id)
  );

  return (
    <>
      <BreadCrumbs />
      <div className="flex flex-col">
        <div className="py-4 px-6  rounded-md ">
          <div className="flex gap-8">
            <Image
              src={market.logoUrl}
              alt={market.title}
              width={250}
              height={250}
              className="w-36 h-36 rounded-full object-cover"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-semibold ">{market.title}</h2>
              <p className=" items-center text-sm line-clamp-2">
                {market.description}
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <h1 className="text-2xl flex flex-col gap-4 items-center justify-center font-semibold mt-6">
            Our Categories <FaArrowDownLong className="animate-bounce" />
          </h1>
          {marketCategories.map((category, i) => {
            return (
              <div key={i} className="py-8 px-4 xl:px-0 ">
                <CategoryList key={i} category={category} isMarketPage={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
