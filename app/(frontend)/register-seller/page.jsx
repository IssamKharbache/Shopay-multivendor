import RegisterForm from "@/components/frontend/authentication/RegisterForm";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <section className=" h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-slate-200 shadow-lg  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Create a new Account (Seller)
              </h1>
              <RegisterForm role="SELLER" />
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default page;
