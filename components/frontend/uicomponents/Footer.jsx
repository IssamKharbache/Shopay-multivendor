import Logo from "@/components/Logo";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full mt-8  py-10 bg-slate-200 dark:bg-slate-800 font-poppins  sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Logo />

            <p className="text-base leading-relaxed  text-gray-900 dark:text-gray-200 mt-7">
              Welcome To SHOPAY Multivendor, Where You Can Buy And Sell Your
              Products
            </p>

            <ul className="flex items-center space-x-3 mt-9 ">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-500  focus:bg-blue-500 "
                >
                  {/* X logo */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-500  focus:bg-blue-500 "
                >
                  {/* facebook logo */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-500  focus:bg-blue-500 "
                >
                  {/* instagram logo */}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-500  focus:bg-blue-500 "
                >
                  {/* github logo */}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black  dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Features{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Works{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black  dark:text-gray-300 dark:hover:text-blue-500 transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Delivery Details{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-gray-300 dark:hover:text-blue-500  transition-all duration-200 hover:text-blue-500  focus:text-blue-500 "
                >
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-500  caret-blue-500 "
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-500  rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-500  dark:text-gray-200">
          © Copyright 2024, All Rights Reserved by Shopay
        </p>
        <p className="text-xl pt-2 uppercase font-semibold text-center text-gray-400 dark:text-gray-400">
          Issam Kharbache
        </p>
      </div>
    </section>
  );
};

export default Footer;
