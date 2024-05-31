import Image from "next/image";
import React from "react";
//COMPONENT
import CategoryCarousel from "@/components/frontend/uicomponents/carousels/CategoryCarousel";
import BreadCrumbs from "@/components/frontend/uicomponents/BreadCrumbs";

//LIB
import { getData } from "@/lib/getData";

//ICONS";
import { MdOutlineDiscount } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import AddToCartBtn from "@/components/frontend/uicomponents/AddToCartBtn";
import { calculatePercentageDifference } from "@/lib/calculatePercentageDifference";
import ProductShareButton from "@/components/frontend/uicomponents/ProductShareButton";
import ProductImageCarousel from "@/components/frontend/uicomponents/ProductImageCarousel";
const SingleProductDetail = async ({ params: { slug } }) => {
  //calculate difference between discount price and normal price

  const product = await getData(`products/product/${slug}`);

  //getting related product without the one on the page
  const { id } = product;
  const categoryId = product.categoryId;
  const category = await getData(`categories/${categoryId}`);
  const categoryProducts = category.products;
  const productsRelated = categoryProducts.filter(
    (product) => id !== product.id
  );
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const urlToShare = `${baseUrl}/products/${slug}`;

  return (
    <div>
      {/* crumbs */}
      <BreadCrumbs />
      {/* Product */}
      <div className=" py-6 px-6 mt-12 rounded-md ">
        <div className="grid  grid-cols-12 gap-8">
          {/* PICTURE */}
          <ProductImageCarousel
            thumbnail={product.imageUrl}
            productImages={product.productImages}
          />
          {/* PRODUCT INFORMATION */}
          <div className="col-span-9  lg:col-span-6">
            {/* title and share */}
            <div className="flex items-center justify-between  ">
              <h2 className="text-xl lg:text-3xl font-semibold">
                {product.title}
              </h2>
              <ProductShareButton urlToShare={urlToShare} />
            </div>
            {/* description */}
            <div className="border-b-[1px] border-b-gray-300 dark:border-b-slate-800 ">
              {/* descr */}
              <p className="py-2 text-sm lg:text-lg">{product.description}</p>
              {/* sku */}
              <div className="flex flex-col md:flex-row justify-between  gap-2 mb-6">
                <p className="flex">
                  <span className="font-semibold text-blue-400">SKU </span>:{" "}
                  {product.sku}
                </p>
                <div className="flex gap-2 rounded-full   ">
                  <p>Stock :</p>
                  <p
                    className={`${
                      Number(product.productStock) > 50
                        ? "text-green-400 font-semibold"
                        : "text-red-500 font-semibold"
                    }`}
                  >
                    {product.productStock}
                  </p>
                </div>
              </div>
            </div>
            {/* price info */}
            <div className="flex flex-col  pt-4  ">
              <p className="flex items-center gap-2 text-gray-400 dark:text-gray-600">
                <MdOutlineDiscount className="w-4 h-4" />
                <span>
                  Save up to
                  {calculatePercentageDifference(
                    product.productPrice,
                    product.salePrice
                  )}
                  % right now
                </span>
              </p>
              <div className="flex items-center gap-2 pt-2 pb-4 border-b-[1px] border-b-gray-300 dark:border-b-slate-800 ">
                <h4 className="text-green-600 dark:text-green-400  text-4xl    rounded-lg">
                  {product.salePrice}$
                </h4>
                <del className="text-red-500 dark:text-red-400 justify-end  rounded-lg   opacity-80 text-xl font-semibold">
                  {product.productPrice}$
                </del>
              </div>
            </div>
            {/* add quantity and add to cart */}
            <AddToCartBtn product={product} />
          </div>
          {/* DELIVERY INFO */}
          <div className="col-span-3 bg-gray-200 border border-gray-200 rounded-lg shadow-xl  dark:bg-gray-800 dark:border-gray-700  overflow-hidden hidden lg:block lg:col-span-3">
            <h2 className="bg-slate-300 text-gray-900 px-2 py-4 dark:bg-slate-700 dark:text-gray-200 font-semibold text-center  border-b-[7px] border-blue-300 dark:border-blue-800">
              DELIVERY & RETURNS
            </h2>
            <div className="p-4">
              <div className="flex flex-col   mt-1">
                <div className="flex items-center justify-center bg-blue-400 rounded-md py-2 px-1 gap-3 text-white ">
                  <span>Shopay Express</span>
                  <FaPaperPlane />
                </div>

                <div className="py-3 text-sm border-b-[1px] border-b-gray-300 dark:border-b-slate-800">
                  <p> Free Delivery Available.</p>

                  <Link
                    href="#"
                    className="text-blue-400 underline hover:text-blue-500 "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related products */}
      <div className="p-2 bg-slate-200 dark:bg-slate-900 rounded-md mt-28">
        <h2 className="text-2xl text-center sm:text-left p-4 font-semibold ml-3">
          Related Products
        </h2>
        <CategoryCarousel products={productsRelated} />
      </div>
    </div>
  );
};

export default SingleProductDetail;
